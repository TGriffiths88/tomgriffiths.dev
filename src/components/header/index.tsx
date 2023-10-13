"use client";
import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  return (
    <motion.header
      className="p-4 md:px-10 md:py-6 fixed top-0 w-full z-50 flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
    >
      <Link
        href="/"
        className="font-black text-black text-lg hover:opacity-70 duration-300  ml-auto"
      >
        TOMGRIFFITHS.DEV
      </Link>
    </motion.header>
  );
};

export default Header;
