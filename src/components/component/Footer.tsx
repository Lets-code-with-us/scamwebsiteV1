"use client"

import { ChevronRight } from 'lucide-react'
import React from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

export function Footer() {
  const [email, setEmail] = React.useState('')
  const [disabled, setDisabled] = React.useState(false)

  React.useEffect(() => {
    setDisabled(email.length === 0)
  }, [email])

  async function emailSubscriber() {
    try {
      const response = await axios.post("/api/user/email", { email })
      if (response) {
        toast.success("Thanks for Subscribing")
        setEmail('')
      }
    } catch (error) {
      toast.error("Try again")
    }
  }

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12">
      <div>
        <Toaster />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-start md:flex-row md:justify-between">
        {/* Left section */}
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="text-3xl font-bold text-neon-blue max-w-sm">
            Subscribe to our Futuristic Newsletter
          </h1>
          <form action="" className="mt-4 flex w-full items-center md:w-3/4">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex h-12 w-full rounded-lg border border-transparent bg-gray-800 px-4 py-2 text-sm text-neon-blue placeholder:text-gray-500 focus:border-neon-blue focus:ring-neon-blue/50 focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300 ease-in-out"
              type="email"
              placeholder="Enter your email"
            />
            <button
              disabled={disabled}
              onClick={emailSubscriber}
              type="button"
              className={`ml-4 rounded-full bg-neon-blue px-4 py-3 text-sm font-semibold text-black shadow-md hover:bg-neon-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-blue transition-transform transform hover:scale-105 active:scale-95 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </form>
        </div>

        {/* Right section */}
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-neon-blue">Company</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-400">
              <li>
                <a
                  href="/about"
                  className="hover:text-neon-blue transition-all duration-300 ease-in-out hover:underline"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/history"
                  className="hover:text-neon-blue transition-all duration-300 ease-in-out hover:underline"
                >
                  Company History
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="hover:text-neon-blue transition-all duration-300 ease-in-out hover:underline"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="/vision"
                  className="hover:text-neon-blue transition-all duration-300 ease-in-out hover:underline"
                >
                  Our Vision
                </a>
              </li>
              <li>
                <a
                  href="/press"
                  className="hover:text-neon-blue transition-all duration-300 ease-in-out hover:underline"
                >
                  Press Release
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-8 border-neon-blue/30" />

      <div className="mx-auto max-w-6xl flex flex-col items-center justify-between px-4 md:flex-row lg:px-0">
        <div className="inline-flex items-center">
          <svg
            width="40"
            height="46"
            viewBox="0 0 50 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
              fill="#00D4FF"
            />
          </svg>
          <span className="ml-4 text-lg font-bold text-neon-blue">DevUI</span>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500">© 2024 DevUI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
