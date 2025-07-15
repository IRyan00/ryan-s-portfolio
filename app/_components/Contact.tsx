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
  const { register, handleSubmit, reset, formState } = useForm<FormData>();
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSending(true);

    try {
      await emailjs.send(
        "service_rykqsvp",
        "template_8qwy3tm",
        {
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
        },
        "PKHdla2y1SRasrdXN"
      );

      toast.success("Message sent successfully! ✅");
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
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
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium flex items-center gap-2"
          >
            <User size={18} />
            Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            {...register("name", { required: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium flex items-center gap-2"
          >
            <AtSign size={18} />
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register("email", { required: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium flex items-center gap-2"
          >
            <MessageSquare size={18} />
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Type your message..."
            rows={5}
            {...register("message", { required: true })}
          />
        </div>

        <Button
          type="submit"
          disabled={isSending || formState.isSubmitting}
          className="w-full py-3 font-semibold"
        >
          {isSending ? (
            <LoaderCircleIcon
              className="-ms-1 animate-spin"
              size={16}
              aria-hidden="true"
            />
          ) : (
            <>
              <Send className="mr-1 h-4 w-4" />
              Submit
            </>
          )}
        </Button>
      </form>
    </div>
  );
};
