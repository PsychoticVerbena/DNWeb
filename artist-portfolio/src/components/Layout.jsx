import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}