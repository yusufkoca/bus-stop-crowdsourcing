import React, { ReactElement } from "react";
import ErrorView from "../components/ErrorView";

const NotFoundPage = (): ReactElement => {
  return <ErrorView errorMessage={"404 Page not found!"}></ErrorView>;
};

export default NotFoundPage;
