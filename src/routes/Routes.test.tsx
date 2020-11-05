import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";

import Routes from "./Routes";
import Layout from "../components/Layout";

const renderWithRouter = (ui: ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};

test("full app rendering/navigating", () => {
  render(
    <Layout>
      <Routes></Routes>
    </Layout>,
    { wrapper: MemoryRouter }
  );

  // home page rendered
  expect(screen.getByText(/Home Page/i)).toBeInTheDocument();

  // click to stops page nav link
  userEvent.click(screen.getByTestId("stops-page-link"));

  // stops page rendered
  expect(screen.getByText(/Bus Stops/i)).toBeInTheDocument();

  // click to home page nav link
  userEvent.click(screen.getByTestId("home-page-link"));
  // home page rendered
  expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
});

test("landing on a bad page", () => {
  renderWithRouter(
    <Layout>
      <Routes></Routes>
    </Layout>,
    { route: "/route/66" }
  );
  expect(screen.getByText(/404 Page not found/i)).toBeInTheDocument();
});
