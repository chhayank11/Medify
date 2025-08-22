import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Search from "./Search/Search.jsx";
import MyBooking from "./MyBooking/MyBooking.jsx";
import ErrorPage from "./ErrorPage/ErrorPage.jsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./Theme.jsx";
import { SnackbarProvider } from "notistack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/search", element: <Search /> },
      { path: "/mybookings", element: <MyBooking /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider
      autoHideDuration={3000}
      maxSnack={1}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <RouterProvider router={router} />
    </SnackbarProvider>
  </ThemeProvider>
);
