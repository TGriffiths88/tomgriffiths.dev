import * as React from "react";
import Modal from "../ui/modal";

type ContactModalProps = {};

const ContactModal = ({}: ContactModalProps) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitting form");
    //TODO: submit form
  };

  return (
    <Modal slug="contact">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Contact Me</h2>
        <form className="flex flex-col gap-y-3" onSubmit={onSubmit}>
          <fieldset className="flex flex-col space-y-1">
            <label className="uppercase text-xs tracking-wide font-bold">
              Name
            </label>
            <input
              className="border py-2 px-4 rounded-md text-sm"
              autoComplete="none"
            />
          </fieldset>
          <fieldset className="flex flex-col space-y-1">
            <label className="uppercase text-xs tracking-wide font-bold">
              Email
            </label>
            <input
              className="border py-2 px-4 rounded-md text-sm"
              type="email"
            />
          </fieldset>
          <fieldset className="flex flex-col space-y-1">
            <label className="uppercase text-xs tracking-wide font-bold">
              Message
            </label>
            <textarea className="border p-4 rounded-md text-sm" rows={8} />
          </fieldset>
          <button className="bg-black text-white uppercase text-xs tracking-widest rounded-md py-3 font-bold self-start px-10">
            Send
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ContactModal;
