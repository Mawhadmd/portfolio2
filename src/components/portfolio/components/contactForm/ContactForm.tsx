"use client";
import React from "react";
import handleSubmit from "./handleSubmit";
import { useActionState } from "react";
import { motion } from "motion/react";

const ContactForm = () => {
  const [state, action, loading] = useActionState(handleSubmit, {
    error: null,
    success: false,
  });

  return (
    <div className="space-y-2 relative">
      {loading && <div></div>}
      <h2>Send me a message:</h2>
      <form action={action} className="space-y-4 ">
        <div className="flex-col bg-Secondary p-4 justify-center items-center rounded-lg">
          <div className="flex gap-1">
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="name"
                className="text-Text mb-1 text-sm font-medium"
              >
                Name<span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                required
                type="text"
                placeholder="Enter your name"
                className="p-2 rounded bg-Primary border border-border text-Text placeholder:text-Muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="flex flex-col w-1/2">
              <label
                htmlFor="email"
                className="text-Text mb-1 text-sm font-medium"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded bg-Primary border border-border text-Text placeholder:text-Muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="message"
              className="text-Text mb-1 text-sm font-medium"
            >
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Enter your message"
              rows={4}
              className="w-full p-2 rounded bg-Primary border border-border text-Text placeholder:text-Muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none"
            />
          </div>

        </div>
          <div className="flex gap-2">
             {state?.success && (
        <div className="flex justify-center items-center p-3 w-full bg-green-500/20 border border-green-500/50 rounded-lg ">
          Message sent successfully!
        </div>
      )}

      {state?.error && (
        <div className="flex justify-center items-center p-3 w-full bg-red-500/20 border border-red-500/50 rounded-lg ">
          {state.error}
        </div>
      )}
            <button
            type="submit"
            disabled={loading}
            className="w-1/2 overflow-hidden ml-auto block h-12 p-2.5 rounded-xl text-Text ansition-all group cursor-pointer relative disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <motion.div className="absolute -z-10 bg-accent inset-0 bottom-[80%] blur transition-all group-hover:bottom-0 group-hover:blur-xs "></motion.div>
            {loading ? "Sending..." : "Send Message"}
          </button>
          </div>
      </form>


     
    </div>
  );
};

export default ContactForm;
