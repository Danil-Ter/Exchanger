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
      <div className="container mx-auto flex items-center  justify-around py-32">
        <div>
          <h1 className=" text-6xl font-bold text-custom-white">Чіп Чендж</h1>
          <p className=" ml-5 pt-5 pb-7 text-xl leading-7   font-medium  text-custom-gray1">
            Обмінник валют - навчальний
          </p>
          <Link
            href="/6"
            className=" ml-5 text-xl font-medium text-custom-gray bg-custom-white border border-custom-white px-6 py-3 rounded-md hover:bg-custom-gray hover:text-white transition-colors"
          >
            Конвертер валют
          </Link>
        </div>
        <div>
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
