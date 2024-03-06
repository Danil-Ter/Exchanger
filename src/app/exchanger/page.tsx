"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import uuid from "uuid-random";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import create from "zustand";

interface CurrencyStore {
  currentCurrency: string;
  changedCurrency: string;
  setCurrentCurrency: (currency: string) => void;
  setChangedCurrency: (currency: string) => void;
}

const useCurrencyStore = create<CurrencyStore>((set) => ({
  currentCurrency: "USD",
  changedCurrency: "UAH",
  setCurrentCurrency: (currency) => set({ currentCurrency: currency }),
  setChangedCurrency: (currency) => set({ changedCurrency: currency }),
}));

export default function Exchanger() {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10);
  const [date, setDate] = useState<string>(formattedDate);
  const [min, setMin] = useState<string>("");
  const [max, setMax] = useState<string>("");
  const [Have, setHave] = useState<number>(0);
  const [WantTo, setWantTo] = useState<number>(0);
  const {
    currentCurrency,
    setCurrentCurrency,
    changedCurrency,
    setChangedCurrency,
  } = useCurrencyStore();
  const [arr, setArr] = useState<
    Array<{ id: string; date: string; Have: string; WantTo: string }>
  >([]);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);
    const timeStamp = currentDate.setDate(currentDate.getDate() - 7);
    const maxDate = new Date(timeStamp).toISOString().slice(0, 10);
    setDate(formattedDate);
    setMin(maxDate);
    setMax(formattedDate);
  }, []);

  useEffect(() => {
    fetchData(date, currentCurrency, changedCurrency);
  }, [date, currentCurrency, changedCurrency]);

  const fetchData = async (
    selectedDate: string,
    currentCurrency: string,
    changedCurrency: string
  ) => {
    const year = new Date(selectedDate).getFullYear();
    const month = new Date(selectedDate).getMonth() + 1;
    const day = new Date(selectedDate).getDate();

    try {
      const res = await fetch(
        `https://v6.exchangerate-api.com/v6/55f8ef440da80d07a129cd4b/history/${currentCurrency}/${year}/${month}/${day}`
      );
      const jsonData = await res.json();
      setData(jsonData);

      if (Have !== 0) {
        const convertedMoney =
          Have * jsonData.conversion_rates[changedCurrency];
        setWantTo(
          isNaN(convertedMoney) ? 0 : parseFloat(convertedMoney.toFixed(2))
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setArr(function (prevObj) {
      if (arr.length >= 10) arr.shift();
      return [
        ...prevObj,
        {
          id: uuid(),
          date: date,
          Have: `${Have} ${currentCurrency}`,
          WantTo: `${WantTo} ${changedCurrency}`,
        },
      ];
    });
  };

  const handleClick = () => {
    setArr([]);
  };

  const HaveEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) {
      setHave(val);
      const convertedMoney = val * data?.conversion_rates[changedCurrency];
      setWantTo(
        isNaN(convertedMoney) ? 0 : parseFloat(convertedMoney.toFixed(2))
      );
    } else {
      setHave(0);
      setWantTo(0);
    }
  };

  const WantToEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) {
      setWantTo(val);
      const convertedMoney = val / data?.conversion_rates[changedCurrency];
      setHave(
        isNaN(convertedMoney) ? 0 : parseFloat(convertedMoney.toFixed(2))
      );
    } else {
      setHave(0);
      setWantTo(0);
    }
  };

  const handleDateChange = (newDate: Date) => {
    setDate(newDate.toISOString().slice(0, 10));
  };

  const handleCurrentCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCurrency = e.target.value;
    setCurrentCurrency(selectedCurrency);
    fetchData(date, selectedCurrency, changedCurrency);
  };

  const handleChangedCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCurrency = e.target.value;
    setChangedCurrency(selectedCurrency);
    fetchData(date, currentCurrency, selectedCurrency);
  };

  return (
    <main>
      <section className="bg-custom-white py-16">
        <div className="container max-w-5xl mx-auto bg-white flex flex-col justify-between px-4 lg:px-20 py-12">
          <h2 className="text-4xl font-bold text-custom-black mb-8">
            Конвертер валют
          </h2>
          <form
            className="flex justify-between items-center pb-14"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-6 justify-center items-start">
              <label
                htmlFor="i-have"
                className="font-medium text-xl text-gray-400"
              >
                В мене є:
              </label>
              <div className="text-xl font-medium text-custom-gray pb-4 lg:pb-8">
                <input
                  type="number"
                  id="i-have"
                  className="w-36 h-16 lg:w-56 px-3 py-2 border border-gray-300 rounded mr-2 focus:outline-none text-xl font-semibold text-custom-gray text-center"
                  placeholder="0"
                  value={Have === 0 ? "" : Have}
                  onChange={HaveEvent}
                />
                <select
                  name="currency"
                  id="i-have"
                  className="w-28 h-16 font-normal text-xl text-gray-400 py-4 pl-4 pr-2 border-2 border-gray-300 rounded outline-none cursor-pointer"
                  value={currentCurrency}
                  onChange={handleCurrentCurrencyChange}
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="CNY">CNY</option>
                  <option value="UAH">UAH</option>
                  <option value="BGN">BGN</option>
                </select>
              </div>
              <div className="relative">
                <DatePicker
                  selected={new Date(date)}
                  onChange={handleDateChange}
                  minDate={new Date(min)}
                  maxDate={new Date(max)}
                  className="w-56 h-16 border border-gray-300 rounded pl-3 text-xl font-semibold text-custom-gray"
                  dateFormat="dd.MM.yyyy"
                />
                <Image
                  src="/images/calendar.png"
                  alt="calendar"
                  width={24}
                  height={24}
                  className="absolute right-3  top-8 transform -translate-y-1/2 cursor-pointer"
                />
              </div>
            </div>
            <Image
              src="/images/switch.png"
              width={22}
              height={22}
              alt="arrows"
              className="cursor-pointer mb-16"
            />
            <div className="grid gap-6">
              <label
                htmlFor="want-to"
                className="font-medium text-xl text-gray-400"
              >
                Хочу придбати:
              </label>
              <div className="text-xl font-medium text-custom-gray pb-4 lg:pb-8">
                <input
                  type="number"
                  id="want-to"
                  className="fw-36 h-16 lg:w-56 px-3 py-2 border border-gray-300 rounded mr-2 focus:outline-none text-xl font-semibold text-custom-gray text-center"
                  placeholder="0"
                  value={WantTo === 0 ? "" : WantTo}
                  onChange={WantToEvent}
                />
                <select
                  name="currency"
                  id="i-have"
                  className="w-28 h-16 font-normal text-xl text-gray-400 py-4 pl-4 pr-2 border-2 border-gray-300 rounded outline-none cursor-pointer"
                  value={changedCurrency}
                  onChange={handleChangedCurrencyChange}
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="CNY">CNY</option>
                  <option value="UAH">UAH</option>
                  <option value="BGN">BGN</option>
                </select>
              </div>
              <button
                className="ml-auto text-lg font-medium text-custom-white bg-custom-blue border border-custom-white px-6 py-3 rounded-md hover:bg-custom-gray hover:text-white transition-colors"
                style={{ height: "64px", width: "228px", fontWeight: 500 }}
              >
                Зберегти результат
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container max-w-5xl mx-auto bg-custom-white flex flex-col justify-between px-4 lg:px-20 py-12">
          <div className="flex justify-between items-center">
            <p className="font-medium text-3xl">Історія конвертації</p>
            <button
              className="text-lg font-medium text-custom-white bg-custom-blue border border-custom-white px-6 py-3 rounded-md hover:bg-custom-gray hover:text-white transition-colors"
              style={{ height: "64px", width: "228px", fontWeight: 500 }}
              onClick={handleClick}
            >
              Очистити історію
            </button>
          </div>
          {!arr.length && (
            <p className="font-medium text-3xl py-6 px-8 text-center border-white">
              Історія конвертації відсутня
            </p>
          )}
          <div className="grid grid-cols-2 gap-y-4 gap-x-12 mt-8">
            {arr.map((item: any) => (
              <div
                key={item.id}
                className="w-96 h-11 flex justify-center items-center gap-5 p-4 bg-white rounded"
              >
                <p className="font-normal text-lg text-custom-gray2">
                  {item.date.split("-").join(".")}
                </p>
                <p className="font-semibold  text-lg text-custom-gray">
                  {item.Have}
                </p>
                <Image
                  src="/images/arrow1.png"
                  width={14}
                  height={10}
                  alt="arrow"
                />
                <p className="font-semibold  text-lg text-custom-gray">
                  {item.WantTo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
