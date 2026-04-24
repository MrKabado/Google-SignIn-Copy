"use client";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-0">
      <div className="sm:max-w-md flex flex-col items-center justify-center sm:border-gray-300 sm:border rounded-md mt-8 p-6 sm:p-10">
        <div className="">
          <Image
            src="/google.png"
            alt="Google Image"
            width={74}
            height={24}
            className="mb-2.5"
          />
        </div>

        <div className="w-full">
          <div>
            <h1 className="text-[22px] sm:text-[24px] text-center pt-1">
              Sign in
            </h1>
            <p className="text-sm sm:text-base pt-2 text-center text-gray-600">
              with your Google Account. This account will be available to other
              Google apps in the browser.
            </p>
          </div>

          <form action="" className="flex flex-col gap-8 sm:gap-9 w-full">
            <div className="pt-6 flex flex-col">
              <div className="relative w-full pt-2">
                <input
                  type="text"
                  placeholder=""
                  className="peer w-full px-2.5 h-13 py-3 border border-gray-300 rounded-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:border-indigo-600"
                />

                <label
                  className="px-1 text-xs bg-white text-gray-500 
                  peer-focus:text-indigo-500
                  absolute left-2 top-0"
                >
                  Email or phone
                </label>
              </div>

              <a
                href="#"
                className="text-[13px] sm:text-[14px] text-blue-600 pt-2"
              >
                Forgot email?
              </a>
            </div>

            <div className="pt-2.5">
              <p className="text-[13px] sm:text-[14px] text-gray-500">
                Not your computer? Use Guest mode to sign in privately. <br />
                <a
                  href="#"
                  className="text-blue-600"
                >
                  Learn more about using Guest mode
                </a>
              </p>
            </div>

            <div className="relative flex justify-between mb-4 items-center">
              <div>
                <button className="absolute top-0 -left-2 px-2 py-2 rounded-sm text-[13px] sm:text-[14px] text-blue-600 hover:bg-[#F6FAFE] hover:text-blue-700">
                  Create account
                </button>
              </div>

              <div>
                <button className="bg-blue-600 text-white px-5 sm:px-6 py-2 rounded-sm text-[13px] sm:text-[14px] cursor-pointer hover:bg-blue-700 hover:shadow-md">
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <footer className="w-full sm:max-w-md flex flex-row justify-between items-center gap-3 sm:gap-0 mt-3 mb-10 px-4 sm:px-0">
        <div className="flex gap-4 cursor-pointer items-center">
          <p className="text-xs text-gray-500">English (United States)</p>
          <ChevronDown className="text-gray-500" size={16} />
        </div>

        <div className="flex flex-row gap-8 text-[12px] text-gray-500 cursor-pointer">
          <a>Help</a>
          <a>Privacy</a>
          <a>Terms</a>
        </div>
      </footer>
    </div>
  );
}