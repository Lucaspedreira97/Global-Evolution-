import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

type Themeprop = {
  children: JSX.Element;
};//#161d22
// BG = "#12181b"
export enum themePalette {
  BG = "#1f2023",
  LIME = "#C8FA5F",
   FONT_GLOBAL = "'Untitled Sans', sans-serif"
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: themePalette.BG
    },
    primary: {
       main: themePalette.LIME
    }
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL,
    fontSize: 18
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
