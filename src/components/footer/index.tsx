"use client";
import * as React from "react";
import config from "../../../config";
import { motion } from "framer-motion";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  const footerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 1.4,
        staggerChildren: 0.1,
      },
    },
  };

  const footerItemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      className="bg-black z-10 text-white lg:bg-transparent lg:fixed lg:bottom-0 lg:left-0 lg:pb-4 lg:px-10 lg:right-0 py-10 lg:flex lg:items-center"
    >
      <motion.ul className="uppercase tracking-wide flex text-sm space-x-6 justify-center mb-4 lg:mb-2 px-4 md:px-10 lg:justify-start lg:py-6 lg:pb-0 lg:px-0 lg:pt-0">
        {config.footerLinks.map((link) => (
          <motion.li key={link.href} variants={footerItemVariants}>
            <a
              href={link.href}
              rel="noopener noreferrer"
              className="font-black hover:opacity-70 duration-300"
            >
              {link.title}
            </a>
          </motion.li>
        ))}
      </motion.ul>
      <small className="text-sm opacity-50 lg:opacity-25 text-center w-full block lg:text-right lg:text-black/80">
        &copy;{new Date().getFullYear()} Tom Griffiths
      </small>
    </motion.footer>
  );
};

export default Footer;
