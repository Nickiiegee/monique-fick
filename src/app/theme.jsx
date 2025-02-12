/**
 * @author Monique Fick
 * @summary MUI theme
 * @since 2025/02/12
 */

import { createTheme } from "@mui/material/styles";

const customColors = {
  blue1: "rgba(3, 118, 250, 0.925)", // Primary Blue - Main
  blue2: "rgba(187, 199, 253, 0.89)", // Primary Blue - Light

  black1: "rgba(0, 0, 0, 0.3)",

  green: "#4CAF50",
  red: "#EF5350",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: customColors.blue1,
      light: customColors.blue2,
    },
    secondary: {
      main: customColors.blue2,
    },
    background: {
      default: customColors.black1, // background grey
    },
    success: {
      main: customColors.green,
    },

    error: {
      main: customColors.red,
    },
  },

  typography: {
    fontFamily: "Benton Sans, Arial, sans-serif",
    h2: {
      fontSize: 36,
      fontWeight: 700,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        contained: {
          borderRadius: "10px",
          padding: "8px 16px",
          color: "white",
          backgroundColor: customColors.blue1,
          "&:hover": {
            backgroundColor: customColors.blue5,
          },
        },
        outlined: {
          borderRadius: "10px",
          padding: "8px 16px",
          backgroundColor: "transparent",
          color: customColors.blue1,
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          background: customColors.black1,
          width: "max-content",
          display: "block",
          padding: "0.1rem 0.7rem",
          position: "fixed",
          left: "50%",
          transform: "translate(-50%)",
          top: 'auto',
          bottom: "2rem",
          borderRadius: "3rem",
          backdropFilter: "blur(15px)",
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          background: "transparent",
          padding: "0.9rem",
          borderRadius: "50%",
          display: "flex",
          color: "rgba(60, 124, 243, 0.589)",
          fontSize: "1.1rem",
          "&:hover": {
            color: "rgba(187, 199, 253, 0.89)",
          }
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: "auto",
          width: 46,
          height: 30,
        },
        switchBase: {
          padding: 2,
          "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#FFFFFF",
            "& + .MuiSwitch-track": {
              backgroundColor: customColors.blue2,
              opacity: 1,
            },
          },
        },
        track: {
          borderRadius: 4,
          backgroundColor: customColors.blue1,
          opacity: 1,
          width: 42,
          height: 25,
          transition: "background-color 0.3s",
        },
      },
    },
  },
});
