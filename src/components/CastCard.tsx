import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import React from "react";
import { ActorInterface } from "../interfaces";
import { getImagePath } from "../utils";
import Image from "./Image";

const CastCard: React.FC<{ actor: ActorInterface }> = ({ actor }) => {
  return (
    <div
      key={actor.id}
      className="relative flex items-start flex-col rounded-md border border-gray-700 bg-gray-800 px-3 py-3 shadow-sm"
    >
      <div className="flex-shrink-0 relative">
        <ArrowsPointingOutIcon className="absolute top-1 right-1 h-4 w-4 text-white" />
        <Image
          className="w-full aspect-video rounded-md object-cover hover:opacity-70"
          src={getImagePath(actor.img)}
          openOnClick
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-bold text-white md:text-base text-sm">
          {actor.name}
        </p>
        <p className="truncate text-sm text-gray-400">
          <span className="block">Age: {actor.age} yrs</span>
          <span className="italic text-white">{actor.profession}</span>
        </p>
      </div>
    </div>
  );
};

export default CastCard;
