import React from "react";
import { ActorInterface } from "../interfaces";

const CastCard: React.FC<{ actor: ActorInterface }> = ({ actor }) => {
  return (
    <div
      key={actor.id}
      className="relative flex items-center space-x-3 rounded-md border border-gray-700 bg-gray-800 px-3 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
    >
      <div className="flex-shrink-0">
        <img className="h-14 w-14 rounded-full" src={actor.img} alt="" />
      </div>
      <div className="min-w-0 flex-1">
        <span className="absolute inset-0" aria-hidden="true" />
        <p className="font-bold text-white">{actor.name}</p>
        <p className="truncate text-sm text-gray-400">
          {actor.profession} | Age: {actor.age}
        </p>
      </div>
    </div>
  );
};

export default CastCard;
