import React, { ReactElement } from "react";
import AppBar from "./AppBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
};

export default Layout;
