import React, { FunctionComponent } from "react";
import Routes from "./routes";
import CustomThemeProvider from "./providers/CustomThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import { ConstantsProvider } from "./providers/ConstantsContext";
import { DonationsProvider } from "./providers/DonationsContext";

const App: FunctionComponent = () => {
  return (
    <ConstantsProvider>
      <CustomThemeProvider>
        <CssBaseline></CssBaseline>
        <DonationsProvider>
          <Router>
            <Layout>
              <Routes></Routes>
            </Layout>
          </Router>
        </DonationsProvider>
      </CustomThemeProvider>
    </ConstantsProvider>
  );
};

export default App;
