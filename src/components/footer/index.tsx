import * as React from "react";
import config from "../../../config";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  return (
    <footer className="bg-black z-10 text-white lg:bg-transparent lg:mix-blend-difference lg:fixed lg:bottom-0 lg:left-0 lg:pb-4 lg:px-10 lg:right-0 py-10">
      <ul className="uppercase tracking-wide flex text-xs space-x-6 justify-center mb-4 lg:mb-2 px-4 md:px-10 lg:justify-start lg:py-6 lg:pb-0 lg:px-0">
        {config.footerLinks.map((link) => (
          <li key={link.href}>
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
      <small className="text-xs opacity-50 text-center w-full block lg:text-left">
        &copy;{new Date().getFullYear()} Tom Griffiths
      </small>
    </footer>
  );
};

export default Footer;
