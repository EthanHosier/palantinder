import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {  QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { theme } from "./theme.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { queryClient } from "./lib/utils.ts";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MantineProvider>
  </StrictMode>
);
