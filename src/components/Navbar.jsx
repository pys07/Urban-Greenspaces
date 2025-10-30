import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-icon">🌱</div>
          <span className="logo-text">Green Spaces</span>
        </Link>
        
        <div className="nav-menu">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/classification" 
            className={`nav-link ${location.pathname === '/classification' ? 'active' : ''}`}
          >
            Classification
          </Link>
          <Link 
            to="/prediction" 
            className={`nav-link ${location.pathname === '/prediction' ? 'active' : ''}`}
          >
            Prediction
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar