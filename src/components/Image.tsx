import { XCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const Image: React.FC<
  React.ImgHTMLAttributes<HTMLImageElement> & {
    openOnClick?: boolean;
  }
> = ({ openOnClick = false, ...props }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {openModal ? (
        <div className="fixed mx-auto z-50 inset-0 w-full h-screen overflow-hidden bg-gray-900 bg-opacity-70 flex justify-center items-center">
          <button
            className="absolute top-6 right-6"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <XCircleIcon className="text-white h-10 w-10" />
          </button>
          <div className="md:h-[70%] md:w-[70%] h-[90%] w-[90%] flex justify-center items-center">
            <img src={props.src} />
          </div>
        </div>
      ) : null}
      <button
        onClick={() => {
          if (!openOnClick) return;
          setOpenModal(true);
        }}
      >
        <img {...props} />
      </button>
    </>
  );
};

export default Image;
