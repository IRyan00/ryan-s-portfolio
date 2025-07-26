"use client";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Send,
  User,
  AtSign,
  MessageSquare,
  LoaderCircleIcon,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const MAX_MESSAGE_LENGTH = 3000;

  const onSubmit = async (data: FormData) => {
    setIsSending(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        {
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent successfully! ✅");
      reset();
      setMessage(""); // reset local message state
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. ❌");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 rounded-lg"
      >
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium flex items-center gap-2"
          >
            <User size={18} aria-label="User icon" />
            Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Your full name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
              maxLength: {
                value: 100,
                message: "Name must be less than 100 characters",
              },
              pattern: {
                value: /^[A-Za-zÀ-ÿ' -]{2,100}$/,
                message: "Please enter a valid name",
              },
            })}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium flex items-center gap-2"
          >
            <AtSign size={18} aria-label="AtSign icon" />
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w\.-]+@[\w\.-]+\.\w{2,}$/,
                message: "Please enter a valid email address",
              },
              maxLength: {
                value: 254,
                message: "Email must be less than 254 characters",
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2 relative">
          <label
            htmlFor="message"
            className="text-sm font-medium flex items-center gap-2"
          >
            <MessageSquare size={18} aria-label="Message icon" />
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Type your message..."
            rows={5}
            className="pr-16 pb-6"
            maxLength={MAX_MESSAGE_LENGTH}
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
              maxLength: {
                value: MAX_MESSAGE_LENGTH,
                message: `Message must be less than ${MAX_MESSAGE_LENGTH} characters`,
              },
              validate: (value) =>
                !/[<>]/.test(value) || "HTML tags are not allowed",
            })}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="text-xs text-muted-foreground absolute bottom-2 right-3 pointer-events-none">
            {message.length}/{MAX_MESSAGE_LENGTH}
          </div>
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isSending || isSubmitting}
          className="w-full py-3 font-semibold"
          aria-label="Send form"
        >
          {isSending ? (
            <LoaderCircleIcon
              className="-ms-1 animate-spin"
              size={16}
              aria-hidden="true"
              aria-label="Loading icon"
            />
          ) : (
            <>
              <Send className="h-4 w-4" aria-label="Send icon" />
              Send message
            </>
          )}
        </Button>
      </form>
    </div>
  );
};
