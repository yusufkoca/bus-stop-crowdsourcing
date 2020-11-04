import React, { FunctionComponent } from "react";
import Routes from "./routes";
import CustomThemeProvider from "./providers/CustomThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";

const App: FunctionComponent = () => {
  return (
    <CustomThemeProvider>
      <CssBaseline></CssBaseline>
      <Router>
        <Layout>
          <Routes></Routes>
        </Layout>
      </Router>
    </CustomThemeProvider>
  );
};

export default App;
