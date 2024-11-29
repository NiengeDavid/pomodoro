import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SignUp } from "@clerk/nextjs";

const Logo = "/icons/logo.png";

const Signup = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="max-w-screen-md flex flex-col justify-center items-center mx-auto p-4 text-center">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image
              src={Logo}
              alt="logo"
              width={100}
              height={200}
              className="w-12 h-12 bg-blue-400 rounded-full p-1"
            />
            <div className="text-xl font-semibold text-blue-500">
              <span className="text-sky-900">EHA-Focus</span>
            </div>
          </div>
        </Link>

        <div className="w-full mt-4">
          <span className="text-white text-xl font-semibold text-center w-full p-4 py-10">
            Create Account
          </span>
        </div>

        <div className="w-full mt-6">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Signup;
