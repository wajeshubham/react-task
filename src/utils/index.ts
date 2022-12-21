import { SERVER_URL } from "../api";

export const classNames = (...className: string[]) => {
  return className.filter(Boolean).join(" ");
};

export const getImagePath = (subPath: string) =>
  `${SERVER_URL}/samples/${subPath}`;
