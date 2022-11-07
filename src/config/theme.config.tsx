import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

type Themeprop = {
  children: JSX.Element;
};

export enum themePalette {
  BG = "#12181b",
  LIME = "#C8FA5F",
   FONT_GLOBAL = "'Montserrat', sans-serif"
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: themePalette.BG,
    },
    primary: {
       main: themePalette.LIME
    }
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL
  }, 
  components: {
    MuiButton: {
        defaultProps: {
            style: {
                textTransform: "none",
                boxShadow: "none",
                borderRadius: "0.4em"
            }
        }
    }
  }
});

export const Themeconfig: React.FC<Themeprop> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
