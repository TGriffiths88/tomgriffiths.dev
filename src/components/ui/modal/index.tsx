"use client";
import * as React from "react";
import { Modal, ModalToggler } from "@faceless-ui/modal";

type ModalProps = {
  slug: string;
  children: React.ReactNode;
  onClose?: () => void;
};

const UiModal = ({ children, slug, onClose }: ModalProps) => {
  return (
    <Modal
      slug={slug}
      className="rounded-md p-5 md:p-8 pt-12 shadow-lg w-[calc(100vw-30px)] max-w-md relative bg-white"
      onClose={onClose}
    >
      <ModalToggler
        className="absolute top-5 right-5 md:top-6 md:right-6"
        slug={slug}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 opacity-50 hover:opacity-100 duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </ModalToggler>
      {children}
    </Modal>
  );
};

export default UiModal;
