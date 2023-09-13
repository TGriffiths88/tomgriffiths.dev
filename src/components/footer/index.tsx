import * as React from "react";

type FooterProps = {};

const FOOTER_LINKS = [
  {
    title: "Github",
    href: "https://github.com/TGriffiths88",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/tomgriffiths88/",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/TomPatrickDevs",
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com/channel/UCMmOS1EqFeuGGSkgWN1S83w",
  },
];

const Footer = ({}: FooterProps) => {
  return (
    <footer className="bg-black text-white lg:bg-transparent lg:mix-blend-difference lg:fixed lg:bottom-0 lg:w-full">
      <ul className="uppercase tracking-wide flex text-xs space-x-6 justify-center py-10 px-4 md:px-10 lg:justify-start lg:py-6">
        {FOOTER_LINKS.map((link) => (
          <li>
            <a
              href={link.href}
              rel="noopener noreferrer"
              className="font-black hover:opacity-70 duration-300"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
