import "./styles/navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand-container">
        <a className="navbar-brand text-white">Logo</a>
      </div>
      <div className="navbar-actions">
        <button className="btn btn-danger my-2" type="submit">
          Logout
        </button>
      </div>
    </nav>
  );
}
