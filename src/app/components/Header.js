import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-custom-white">
      <div className="  container mx-auto flex items-center  justify-around h-24">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Логотип"
            width={23}
            height={23}
            className="mr-2"
          />
          <p className="text-xl font-bold" style={{ fontFamily: 'Work Sans'}}>Чіп Чендж</p>
        </div>
        <nav className="flex space-x-4 text-sm font-normal text-custom-gray pl-10 mr-auto">
          <Link className=" px-3" href="/1">Послуги</Link>
          <Link className=" px-3" href="/2">Конвертер валют</Link>
          <Link className=" px-3" href="/3">Контакти</Link>
          <Link className=" px-3" href="/4">Задати питання</Link>
        </nav>
        <div className="flex items-center">
          <Image
            src="/images/door.png"
            alt="Логотип"
            width={20}
            height={22}
            className="mr-2"
          />
          <Link   href="/5" className="text-sm font-normal text-custom-black">Особистий кабінет</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
