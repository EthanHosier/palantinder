import { createTheme, MantineColorsTuple } from "@mantine/core";

const myColor: MantineColorsTuple = [
  "#f3edff",
  "#e0d7fa",
  "#beabf0",
  "#9a7de6",
  "#7c55de",
  "#693cd9",
  "#5f30d8",
  "#4f23c0",
  "#461eac",
  "#3b1898",
];

export const theme = createTheme({
  colors: {
    myColor,
  },

  primaryColor: "myColor",
});
