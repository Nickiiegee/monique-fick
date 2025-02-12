/**
 * @author Monique Fick
 * @summary MUI theme
 * @since 2025/02/12
 */

import { createTheme } from "@mui/material/styles";

const customColors = {
  blue1: "rgba(3, 118, 250, 0.925)", // Primary Blue - Main
  blue2: "rgba(187, 199, 253, 0.89)", // Primary Blue - Light
  blue3: "#00008C", // Primary Blue - Dark
  blue4: "#00164E", // Primary Blue - Contrast
  blue5: "#335CB4", // Secondary Blue - Main
  blue6: "#3374FF", // Secondary Blue - Light
  blue7: "#3333A3", // Secondary Blue - Dark
  blue8: "#334571", // Secondary Blue - Contrast

  grey1: "#1a314d", // Text - Primary
  grey2: "#7C868D", // Text - Secondary
  grey3: "#BDC2C6", // Text - Disabled
  grey4: "#F4F4F4", // Background - Default
  grey5: "#FFFFFF", // Background - Paper

  black1: "rgba(0, 0, 0, 0.3)",

  green: "#4CAF50",
  red: "#EF5350",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: customColors.blue1,
      light: customColors.blue2,
      dark: customColors.blue3,
      contrastText: customColors.blue4,
    },
    secondary: {
      main: customColors.blue5,
      light: customColors.blue6,
      dark: customColors.blue7,
      contrastText: customColors.blue8,
    },
    background: {
      default: customColors.black1, // background grey
      paper: customColors.grey5, // white paper
    },
    text: {
      primary: customColors.grey1, // main text
      secondary: customColors.grey2, // sub text
      disabled: customColors.grey3, // disabled or placeholder
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

    h1: {
      fontSize: 48,
      fontWeight: 700,
    },
    h2: {
      fontSize: 36,
      fontWeight: 700,
    },
    h5: {
      fontSize: 24,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 700,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
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

    MuiCard: {
      styleOverrides: {
        root: {
          padding: "24px",
          borderRadius: "20px",
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
