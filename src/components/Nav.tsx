import { useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react";

import logoImg from "@assets/images/logo.webp";

import config from "@data/config.json";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className="font-sans">
      <nav className="py-8 px-8 absolute top-0 left-0 w-full z-50 h-32 flex flex-col items-center justify-center">
        <div className="grid grid-cols-4 w-full place-items-center max-md:justify-center items-center">
          <ul className="menu menu-horizontal items-center gap-4 max-md:hidden">
            {config.pages.slice(0, 2).map((page) => (
              <li key={page.name}>
                <a href={page.url}>{page.name}</a>
              </li>
            ))}
          </ul>
          <a
            href="/"
            className="text-4xl col-span-2 col-start-2 uppercase font-bold text-center hover:text-neutral transition max-md:hidden"
          >
            <img
              src={logoImg.src}
              alt="Logo"
              className="w-20 rounded-2xl"
              width={200}
              height={200}
            />
          </a>
          <ul className="menu menu-horizontal items-center gap-4 max-md:hidden">
            {config.pages.slice(2).map((page) => (
              <li key={page.name}>
                <a href={page.url}>{page.name}</a>
              </li>
            ))}
            <li key={"booking"}>
              <a href={config.bookingLink} target="_blank" className="btn">
                Book Now
              </a>
            </li>
            <li key={"gift"}>
              <a
                href={config.giftLink}
                target="_blank"
                className="btn btn-secondary"
              >
                Buy a Gift Voucher
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        id="mobileNav"
        className={`fixed top-0 left-0 w-full h-full bg-primary z-20 transition-all flex justify-center items-center flex-col text-4xl ${
          showMobileNav ? "opacity-100 z-30" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-8">
          {config.pages.map((page) => (
            <a key={page.name} className="link text-white" href={page.url}>
              {page.name}
            </a>
          ))}
        </div>
      </div>
      <Icon
        icon={`${
          showMobileNav
            ? "line-md:menu-to-close-transition"
            : "line-md:close-to-menu-transition"
        }`}
        className={`fixed bottom-2 bg-primary left-1/2 -translate-x-1/2 z-50 rounded-full p-4 transition-all ${
          showMobileNav ? "bg-secondary text-base-100" : "bg-base-100"
        } text-4xl md:hidden`}
        onClick={() => setShowMobileNav(!showMobileNav)}
      />
    </div>
  );
};

export default Nav;
