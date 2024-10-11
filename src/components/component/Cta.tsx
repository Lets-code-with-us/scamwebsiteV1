"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Cta() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form reload
    console.log("Form submitted with email:", email); // Debugging: Check if the form submits
    if (email) {
      setMessage("Thank you for subscribing to our newsletter!");
    } else {
      setMessage("Please provide a valid email address.");
    }
  };

  return (
    <section className="py-12 mb-20 bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="isolate flex justify-center -space-x-2">
            <Image
              height={1200}
              width={1200}
              className="relative z-10 inline-block h-16 w-16 rounded-full ring-4 ring-white"
              src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
              alt="Lee Robinson"
            />
            <Image
              width={1200}
              height={1200}
              className="relative z-0 inline-block h-16 w-16 rounded-full ring-4 ring-white"
              src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
              alt="Delba"
            />
          </div>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-gray-800 sm:text-5xl lg:mt-12 lg:text-6xl">
            Become part of{" "}
            <span className="border-b-8 border-yellow-400">
              our Tech Community.
            </span>
          </h2>

          {/* Subscription Form */}
          <form onSubmit={handleSubscribe} className="flex justify-center mt-8">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <button
              type="submit"
              className="ml-4 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Subscribe Now
            </button>
          </form>

          {/* Message Display */}
          {message && <p className="mt-4 text-green-600">{message}</p>}
        </div>
      </div>
    </section>
  );
}
