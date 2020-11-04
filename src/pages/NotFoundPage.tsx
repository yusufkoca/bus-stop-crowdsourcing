import React from "react";
import ErrorView from "../components/ErrorView";

const NotFoundPage = () => {
  return <ErrorView errorMessage={"404 Page not found!"}></ErrorView>;
};

export default NotFoundPage;
