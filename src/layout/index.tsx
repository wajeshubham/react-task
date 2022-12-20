import React from "react";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="md:mt-20 mt-16">{children}</main>
    </>
  );
};

export default Layout;
