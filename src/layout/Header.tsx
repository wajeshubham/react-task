import { HeartIcon, ShareIcon } from "@heroicons/react/24/outline";
import React from "react";

const Header = () => {
  return (
    <header className="z-30 md:px-8 fixed border-b-[0.1px] border-gray-700 top-0 px-4 bg-gray-900 w-full">
      <nav className="flex justify-between items-center">
        <div>
          <img
            className="md:h-20 h-16"
            src="https://wajeshubham-portfolio.s3.ap-south-1.amazonaws.com/netflix_logo.png"
          />
        </div>
        <div className="flex justify-end items-center gap-6">
          <HeartIcon className="text-white md:h-6 h-4 md:w-6 w-4" />
          <ShareIcon className="text-white md:h-6 h-4 md:w-6 w-4" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
