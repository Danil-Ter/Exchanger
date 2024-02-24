import Link from "next/link";
import Image from "next/image";

function Banner() {
  return (
    <div
      className="bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around py-8 md:py-32">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-custom-white">Чіп Чендж</h1>
          <p className="text-lg md:text-xl leading-7 font-medium text-custom-gray1 mt-3 md:mt-5">
            Обмінник валют - навчальний
          </p>
          <Link
            href="/exchanger"
            className="text-lg md:text-xl font-medium text-custom-gray bg-custom-white border border-custom-white px-6 py-3 rounded-md mt-4 md:mt-6 inline-block hover:bg-custom-gray hover:text-white transition-colors"
          >
            Конвертер валют
          </Link>
        </div>
        <div className="text-center md:text-right">
          <Image
            src="/images/card.png"
            alt="Логотип"
            width={341}
            height={216}
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;

