import { createTheme, MantineColorsTuple } from "@mantine/core";
import "./styles/fonts.css";

const myColor: MantineColorsTuple = [
  "#fcf1fe",
  "#ede2ef",
  "#d4c4d7",
  "#bba5bf",
  "#a589ab",
  "#98789f",
  "#926f99",
  "#7f5e86",
  "#725378",
  "#64466b",
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
