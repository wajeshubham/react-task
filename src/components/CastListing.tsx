import { ListBulletIcon, TableCellsIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { ActorInterface } from "../interfaces";
import { classNames } from "../utils";
import CastCard from "./CastCard";
import CastListItem from "./CastListItem";

const CastListing: React.FC<{ cast: ActorInterface[] }> = ({ cast }) => {
  const [listType, setListType] = useState<"list" | "grid">("grid");
  return (
    <>
      {/* Extra feature to show cast in list as well as in card layout */}
      <div className="flex justify-end items-center gap-4  py-4">
        <button
          onClick={() => {
            setListType("list");
          }}
          className={classNames(
            listType === "list" ? "bg-gray-700" : "bg-gray-800",
            "hover:bg-gray-700 rounded-md aspect-square p-2"
          )}
        >
          <ListBulletIcon className="text-white w-5 h-5" />
        </button>
        <button
          onClick={() => {
            setListType("grid");
          }}
          className={classNames(
            listType === "grid" ? "bg-gray-700" : "bg-gray-800",
            "hover:bg-gray-700 rounded-md aspect-square p-2"
          )}
        >
          <TableCellsIcon className="text-white w-5 h-5" />
        </button>
      </div>
      {listType === "list" ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {cast.map((actor) => (
            <CastListItem actor={actor} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cast.map((actor) => (
            <CastCard actor={actor} />
          ))}
        </div>
      )}
    </>
  );
};

export default CastListing;
