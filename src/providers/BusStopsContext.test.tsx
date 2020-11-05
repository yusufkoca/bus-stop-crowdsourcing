import React, { ReactElement } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BusStopsProvider } from "./BusStopsContext";
import BusStopsPage from "../pages/BusStopsPage";
import { BusStop } from "../types";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";

test("BusStopsPage does not render any bus stop without context", () => {
  render(<BusStopsPage />);

  expect(screen.queryByText(/Donate/i)).not.toBeInTheDocument();
});

const customRender = (ui: ReactElement, defaultValue: BusStop[]) => {
  return render(
    <BrowserRouter>
      <SnackbarProvider maxSnack={5}>
        <BusStopsProvider defaultValue={defaultValue}>{ui}</BusStopsProvider>
      </SnackbarProvider>
    </BrowserRouter>
  );
};

test("BusStopsPage shows busstops from context", () => {
  const defaultValue = [
    {
      stopId: 1,
      lat: 39.925533,
      lng: 32.866287,
      donationsRaisedInDollars: 0,
      name: "Final Destination",
    },
    {
      stopId: 2,
      lat: 39.91,
      lng: 32.85,
      donationsRaisedInDollars: 0,
      name: "Destination Unknown",
    },
  ];
  customRender(<BusStopsPage />, defaultValue);
  //Buttons rendered
  expect(screen.getAllByText(/Donate/i)).toBeTruthy();

  try {
    //If service returns result it is rendered otherwise it will render default values given
    expect(screen.getByText(/Hertz at Portman Blvd/i)).toBeInTheDocument();
  } catch {
    expect(screen.getByText(/Destination Unknown/i)).toBeInTheDocument();
  }
});
