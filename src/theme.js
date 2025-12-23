"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4bb8a2",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
    body1: {
      color: "#6a7282",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        colorInherit: {
          backgroundColor: "#fff",
          border: "1px solid #f6f3f4",
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#fff",
          "& fieldset": {
            borderRadius: "8px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        },
      },
    },
  },
});

export default theme;
