"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
          borderRadius: "8px",
        },
      },
    },
  },
});

export default theme;
