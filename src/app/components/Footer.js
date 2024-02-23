import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-custom-white py-8 px-4">
      <div className="container mx-auto flex flex-wrap justify-around items-start pt-3">
        <div className="flex flex-col">
          <div className="flex items-start mb-4">
            <Image
              src="/images/logo.png"
              alt="Логотип"
              width={23}
              height={23}
              className="mr-2"
            />
           <p className="text-xl font-bold" style={{ fontFamily: 'Work Sans'}}>Чіп Чендж</p>
          </div>
          <p className="text-sm font-normal text-custom-gray">
  04128, м.Київ, вул. Хрещатик, 19 <br />
  Ліцензія НБУ №156 <br />Ⓒ ПАТ ЧіпЧендж, 2019-2023
</p>

        </div>
        <div className="flex flex-col mb-4">
          <nav className="text-custom-gray  font-medium text-base ">
            <Link href="/1" className="block mb-2">
              Послуги
            </Link>
            <Link href="/" className="block mb-2">
              Конвертер валют
            </Link>
            <Link href="/3" className="block mb-2">
              Контакти
            </Link>
            <Link href="/4" className="block mb-2">
              Задати питання
            </Link>
          </nav>
        </div>
        <div className="flex flex-col mb-4">
          <div className="flex items-center mb-2">
            <Image
              src="/images/phone.png"
              alt="Логотип"
              width={10}
              height={16}
              className="mr-2"
            />
            <p className="text-custom-black font-medium text-base">3773</p>
          </div>
          <p className="text-custom-gray  font-normal   text-xs  ml-5">Цілодобова підтримка</p>
        </div>
        <div className="flex flex-col mb-4">
          <div className="flex items-center mb-2">
            <Image
              src="/images/phone1.png"
              alt="Логотип"
              width={16}
              height={16}
              className="mr-2"
            />
            <p className="text-custom-black font-medium text-base">8 800 111 22 33</p>
          </div>
          <p className="text-custom-gray  font-normal   text-xs  ml-6">
            Безкоштовно для дзвінків <br /> в межах України
          </p>
        </div>
        <div className="flex align-top">
          <Image
            src="/images/FB.png"
            alt="Facebook"
            width={9}
            height={16}
            className="mx-2 object-contain"
          />
          <Image
            src="/images/inst.png"
            alt="Instagram"
            width={16}
            height={16}
            className="mx-2 object-contain"
          />
          <Image
            src="/images/twiter.png"
            alt="Twitter"
            width={16}
            height={13}
            className="mx-2 object-contain"
          />
          <Image
            src="/images/Youtube.png"
            alt="YouTube"
            width={16}
            height={13}
            className=" mx-2 object-contain"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
