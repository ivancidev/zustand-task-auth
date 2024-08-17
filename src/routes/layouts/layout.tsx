import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import "./styles/layout.css"

export default function Layout() {
  return (
    <>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
