import { createTheme, MantineColorsTuple } from "@mantine/core";
import "./styles/fonts.css";

const myColor: MantineColorsTuple = [
  "#fff4e1",
  "#ffe8cc",
  "#fed09b",
  "#fdb766",
  "#fca13a",
  "#fc931d",
  "#fc8c0c",
  "#e17800",
  "#c86a00",
  "#af5a00"
];

export const theme = createTheme({
  colors: {
    myColor,
  },

  primaryColor: "myColor",
  radius: {
    full: "9999px",
  },
  fontFamily: "var(--font-poppins)",
  headings: {
    fontFamily: "var(--font-poppins)",
  },
});
