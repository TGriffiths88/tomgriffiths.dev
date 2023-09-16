import * as React from "react";
import Link from "next/link";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  return (
    <header className="p-4 md:px-10 md:py-6 fixed top-0 w-full z-50">
      <Link
        href="/"
        className="font-black text-white mix-blend-difference text-2xl hover:opacity-70 duration-300"
      >
        TOM GRIFFITHS
      </Link>
    </header>
  );
};

export default Header;
