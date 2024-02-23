import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-white  my-24">
        <div className="container mx-auto flex items-center justify-around"> 
          <div>
            <h2 className="text-4xl font-bold text-custom-black">
              Конвертер валют
            </h2>
            <p className="py-5 text-xl font-normal text-custom-gray">
              Переважна діяльність банківської <br /> групи за останні чотири
              звітні квартали <br /> становить 50 і більше відсотків.
            </p>
            <button className="text-xl font-medium text-custom-white bg-custom-blue border border-custom-white px-6 py-3 rounded-md hover:bg-custom-gray hover:text-white transition-colors">
              <Link href="/">Конвертери валюту</Link>
            </button>
          </div>
          <div>
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
