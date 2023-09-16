"use client";
import * as React from "react";
import Modal from "../ui/modal";
import { useForm } from "react-hook-form";
import { ContactFormData, ContactFormSchema } from "@/schemas/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../ui/input";
import Label from "../ui/label";
import TextArea from "../ui/textarea";
import FieldError from "../ui/field-error";
import FieldSet from "../ui/fieldset";
import Form from "../ui/form";

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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FieldSet>
            <Label htmlFor="name">Name</Label>
            <Input autoComplete="none" {...register("name")} />
            <FieldError errorMessage={errors.name?.message} />
          </FieldSet>
          <FieldSet>
            <Label>Email</Label>
            <Input {...register("email")} type="email" />
            <FieldError errorMessage={errors.email?.message} />
          </FieldSet>
          <FieldSet>
            <Label>Message</Label>
            <TextArea rows={8} {...register("message")} />
            <FieldError errorMessage={errors.message?.message} />
          </FieldSet>
          <button className="bg-black text-white uppercase min-w-[180px] text-xs tracking-widest rounded-md py-3 font-bold self-start px-10">
            {loading ? "Sending..." : "Send"}
          </button>
        </Form>
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
