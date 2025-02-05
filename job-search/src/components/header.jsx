import { FaUserCircle } from "react-icons/fa";
import "./header.css"; 

const Header = () => {
  return (
    <header>
      {/* Logo Section */}
      <div className="logo">
      <img src="/logo.png" alt="The Opportunity Hub UK" className="logo-img" />
      <span className="logo-text">THE OPPORTUNITY HUB UK</span>
      </div>

      {/* Navigation Links */}
      <nav className="navbar">
        <a href="#">Opportunities</a>
        <span>|</span>
        <a href="#">Get In Touch</a>
        <span>|</span>
        <a href="#">Our Story</a>
        <span>|</span>
        <a href="#">FAQs</a>
      </nav>
    </header>
  );
};

export default Header;
