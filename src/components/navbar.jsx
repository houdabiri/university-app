import './navbar.css'
import {Link} from "react-router-dom";

const Navbar =() => {
    return (
      <nav className="navbar" >
        <Link to="/">Accueil</Link>
        <Link to="/etudiant">Etudiants</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    );
  };
  export default Navbar;
  