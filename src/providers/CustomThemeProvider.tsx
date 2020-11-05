import React, { ReactElement } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import primaryColor from "@material-ui/core/colors/amber";
import secondaryColor from "@material-ui/core/colors/lime";

type CustomThemeProviderProps = {
  children: React.ReactNode;
};

const CustomThemeProvider = ({
  children,
}: CustomThemeProviderProps): ReactElement => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)"); // gets client preference from (browser, computer etc.), if any
  let muiThemeType: "light" | "dark" | undefined = "light";
  if (prefersDarkMode) {
    muiThemeType = "dark";
  }

  const muiTheme = createMuiTheme({
    palette: {
      type: muiThemeType,
      primary: primaryColor,
      secondary: secondaryColor,
    },
  });

  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
