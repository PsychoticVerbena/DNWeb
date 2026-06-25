import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>{" | "}
      <Link to="/gallery">Gallery</Link>{" | "}
      <Link to="/commissions">Commissions</Link>{" | "}
      <Link to="/shop">Shop</Link>{" | "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}