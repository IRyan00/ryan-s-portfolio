"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import { Send, User, AtSign, MessageSquare } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = () => {};

  return (
    <div className="w-full max-w-lg mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 rounded-lg"
      >
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="mb-2 text-sm font-medium flex items-center gap-2"
            aria-label="Name"
          >
            <User size={20} aria-label="User icon" />
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="w-full p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--thridary-foreground)]"
            placeholder="Your name"
            aria-label="Name"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-2 text-sm font-medium flex items-center gap-2"
            aria-label="email"
          >
            <AtSign size={20} aria-label="At icon" />
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--thridary-foreground)]"
            placeholder="you@email.com"
            aria-label="email"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="mb-2 text-sm font-medium flex items-center gap-2"
            aria-label="Message"
          >
            <MessageSquare size={20} aria-label="Message icon" />
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            className="w-full p-3 rounded-md  border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--thridary-foreground)] min-h-[120px]"
            placeholder="Type your message..."
            aria-label="Message"
          ></textarea>
        </div>
        <Button
          type="submit"
          aria-label="Submit contact form"
          className="w-full py-3 font-semibold rounded-md transition-colors duration-200"
        >
          <Send aria-label="Submit icon" />
          Submit
        </Button>
      </form>
    </div>
  );
};
