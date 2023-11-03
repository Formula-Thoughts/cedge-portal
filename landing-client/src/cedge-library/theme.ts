import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#5B4DAF",
    primaryDark: "#3B3275",
    secondary: "#4D9EAF",
    background: "#0D0F17",
    text: "#F3F1FC",
  },
  fonts: {
    family: {
      primary: "Gabarito, sans-serif",
    },
    types: {
      small: {
        lineHeight: "1rem",
        fontWeight: "normal",
        size: "0.5rem",
      },
      medium: {
        lineHeight: "1.6rem",
        fontWeight: "normal",
        size: "1.3rem",
      },
      large: {
        lineHeight: "2.2rem",
        fontWeight: "normal",
        size: "2rem",
      },
      extraLarge: {
        lineHeight: "1rem",
        fontWeight: "normal",
        size: "3rem",
      },
    },
  },
  sizes: {
    logo: {
      small: "5rem",
    },
  },
};

export default theme;
