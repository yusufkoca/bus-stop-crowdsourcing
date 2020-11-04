import React, { FunctionComponent } from "react";
import Routes from "./routes";
import { SnackbarProvider } from "notistack";
import CustomThemeProvider from "./providers/CustomThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import { ConstantsProvider } from "./providers/ConstantsContext";
import { BusStopsProvider } from "./providers/BusStopsContext";
import { DonationsProvider } from "./providers/DonationsContext";

const App: FunctionComponent = () => {
  return (
    <ConstantsProvider>
      <CustomThemeProvider>
        <CssBaseline></CssBaseline>
        <Router>
          <SnackbarProvider maxSnack={5}>
            <BusStopsProvider>
              <DonationsProvider>
                <Layout>
                  <Routes></Routes>
                </Layout>
              </DonationsProvider>
            </BusStopsProvider>
          </SnackbarProvider>
        </Router>
      </CustomThemeProvider>
    </ConstantsProvider>
  );
};

export default App;
