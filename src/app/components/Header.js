'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-custom-white relative">
      <div className="container mx-auto flex items-center justify-between h-24">
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
        <div className="hidden md:flex space-x-4 text-sm font-normal text-custom-gray">
          <Link className="px-3" href="/services">Послуги</Link>
          <Link className="px-3" href="/exchanger">Конвертер валют</Link>
          <Link className="px-3" href="/links">Контакти</Link>
          <Link className="px-3" href="/questions">Задати питання</Link>
        </div>
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="h-6 w-6 fill-current text-gray-500 hover:text-custom-black" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center">
          <Image
            src="/images/door.png"
            alt="Логотип"
            width={20}
            height={22}
            className="mr-2"
          />
          <Link href="/5" className="text-sm font-normal text-custom-black">Особистий кабінет</Link>
        </div>
      </div>
      <nav className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 text-center z-10 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-100%]'} transform origin-top`} style={{ maxHeight: isOpen ? '200px' : '0px', overflow: 'hidden' }}>
        <Link className="block px-3 py-2" href="/services">Послуги</Link>
        <Link className="block px-3 py-2" href="/exchanger">Конвертер валют</Link>
        <Link className="block px-3 py-2" href="/links">Контакти</Link>
        <Link className="block px-3 py-2" href="/questions">Задати питання</Link>
        <Link className="block px-3 py-2" href="/questions">Особистий питання</Link>
      </nav>
    </header>
  );
};

export default Header;
