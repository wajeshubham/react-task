import { FilmIcon } from "@heroicons/react/24/outline";
import React from "react";
import Rating from "./Rating";
import { SeriesSummaryInterface } from "../interfaces";
import { getImagePath } from "../utils";
import Image from "./Image";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";

const SeriesSummary: React.FC<{ summary: SeriesSummaryInterface }> = ({
  summary,
}) => {
  return (
    <>
      <div className="flex lg:flex-row gap-5 text-white justify-start flex-wrap items-end">
        <div className="relative h-48 bg-black rounded-md flex justify-center items-center">
          <ArrowsPointingOutIcon className="absolute top-2 right-2 h-5 w-5" />
          <Image className="w-36" src={getImagePath(summary.img)} openOnClick />
        </div>
        <div className="text-start flex justify-start items-start flex-col pb-4">
          <h1 className="text-3xl font-bold inline-flex items-center gap-3">
            <FilmIcon className="w-9 h-9" />
            {summary.title}
          </h1>
          <div className="text-sm my-2 text-gray-400">
            <span>Action</span>&nbsp;&nbsp;|&nbsp;&nbsp;
            <span>Thriller</span>
          </div>
          <div className="text-sm text-gray-400">
            <div className="flex gap-3 flex-row flex-wrap text-sm">
              <Rating rating={4} />
              <span>1.24 M reviews</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white my-2.5">
        <p className="text-2xl font-bold mt-5 mb-3">About Series</p>
        <p>{summary.desc}</p>
      </div>
    </>
  );
};

export default SeriesSummary;
