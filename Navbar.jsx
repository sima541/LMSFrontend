import { Link } from 'react-router-dom';
import './Navbar.css'; // assuming CSS in same folder

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">LMS</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login/Signup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
