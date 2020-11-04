import React from "react";
import AppBar from "./AppBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
};

export default Layout;
