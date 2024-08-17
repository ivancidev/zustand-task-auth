import { useAuthStore } from "../../store/useAuthStore";
import "./styles/navbar.css";
export default function Navbar() {
  const logout = useAuthStore((state) => state.logout);
  return (
    <nav className="navbar">
      <div className="navbar-brand-container">
        <a className="navbar-brand">Logo</a>
      </div>
      <div className="navbar-actions">
        <button className="btn btn-danger my-2" type="submit" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
