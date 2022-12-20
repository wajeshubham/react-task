import { FilmIcon } from "@heroicons/react/24/outline";
import React from "react";
import Rating from "../icons/rating";
import { SeriesSummaryInterface } from "../interfaces";

const SeriesSummary: React.FC<{ summary: SeriesSummaryInterface }> = ({
  summary,
}) => {
  return (
    <>
      <div className="flex lg:flex-row gap-5 text-white justify-start flex-wrap items-end">
        <img
          className="w-36"
          src="https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        />
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
              <Rating rating={5} />
              <span>46 reviews</span>
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
