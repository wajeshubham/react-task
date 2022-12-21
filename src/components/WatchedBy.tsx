import React from "react";
import Image from "./Image";

const WatchedBy = () => {
  return (
    <div className="text-white">
      <label className="text-gray-500 ">Watched by</label>
      <div className="mt-2 flex justify-start items-center gap-2">
        <div className="flex justify-start items-center relative">
          <Image
            src="https://pics.filmaffinity.com/Mad_Max_Fury_Road-352265893-large.jpg"
            className="rounded-full w-10 h-10 border-4 border-gray-900"
          />
          <Image
            src="https://pics.filmaffinity.com/Mad_Max_Fury_Road-352265893-large.jpg"
            className="rounded-full -ml-3 w-10 h-10 border-4 border-gray-900"
          />
          <Image
            src="https://pics.filmaffinity.com/Mad_Max_Fury_Road-352265893-large.jpg"
            className="rounded-full -ml-3 w-10 h-10 border-4 border-gray-900"
          />
        </div>
        <p className="text-gray-300">John Doe and 12k others</p>
      </div>
    </div>
  );
};

export default WatchedBy;
