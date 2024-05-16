import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Blog Post</h2>
      <div className="links">
        <Link to="/">Homepage</Link>
        <Link to="/about">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;