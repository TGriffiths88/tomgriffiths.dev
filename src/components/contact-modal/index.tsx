"use client";
import * as React from "react";
import Modal from "../ui/modal";
import { useForm } from "react-hook-form";
import { ContactFormData, ContactFormSchema } from "@/schemas/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";

type ContactModalProps = {};

const ContactModal = ({}: ContactModalProps) => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(ContactFormSchema) });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/contact-message", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setLoading(false);
        setSuccess(true);
        return;
      } else {
        setLoading(false);
        setError(true);
        return;
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <Modal slug="contact" onClose={reset}>
      <h2 className="text-xl font-bold mb-4">Contact me</h2>
      {!success && (
        <form
          className="flex flex-col gap-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className="flex flex-col space-y-1">
            <label className="uppercase text-xs tracking-wide font-bold">
              Name
            </label>
            <input
              className="border py-2 px-4 rounded-md text-sm"
              autoComplete="none"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs text-red-800">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="flex flex-col space-y-1">
            <label className="uppercase text-xs tracking-wide font-bold">
              Email
            </label>
            <input
              className="border py-2 px-4 rounded-md text-sm"
              {...register("email")}
              type="email"
            />
            {errors.email && (
              <p className="text-xs text-red-800">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="flex flex-col space-y-1">
            <label className="uppercase text-xs tracking-wide font-bold">
              Message
            </label>
            <textarea
              className="border p-4 rounded-md text-sm"
              rows={8}
              {...register("message")}
            />
            {errors.message && (
              <p className="text-xs text-red-800">{errors.message.message}</p>
            )}
          </fieldset>
          <button className="bg-black text-white uppercase min-w-[180px] text-xs tracking-widest rounded-md py-3 font-bold self-start px-10">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      )}
      {success && <p>Thanks! I&apos;ll be in touch soon.</p>}
      {error && (
        <p className="mt-4 text-red-800 text-sm">
          Sorry, there was an error sending your message. Please try again.
        </p>
      )}
    </Modal>
  );
};

export default ContactModal;
