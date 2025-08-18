import "./App.css";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import DownloadApp from "./components/Sections/DownloadApp/DownloadApp";

function App() {
  return (
    <>
      <CssBaseline />
      <Outlet />
      <DownloadApp />
    </>
  );
}

export default App;
