import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-white my-8 md:my-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black">
              Конвертер валют
            </h2>
            <p className="py-3 md:py-5 text-lg md:text-xl lg:text-2xl font-normal text-custom-gray">
              Переважна діяльність банківської <br /> групи за останні чотири
              звітні квартали <br /> становить 50 і більше відсотків.
            </p>
            <button className="text-lg md:text-xl lg:text-2xl font-medium text-custom-white bg-custom-blue border border-custom-white px-6 py-3 rounded-md mt-4 md:mt-6 hover:bg-custom-gray hover:text-white transition-colors">
              <Link href="/exchanger">Конвертери валюту</Link>
            </button>
          </div>
          <div className="text-center md:text-right">
            <Image
              src="/images/card1.png"
              alt="Логотип"
              width={436}
              height={314}
              className=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}
