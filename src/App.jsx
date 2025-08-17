import "./App.css";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <CssBaseline />
      <Outlet />
    </>
  );
}

export default App;
