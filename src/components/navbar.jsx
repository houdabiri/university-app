function Navbar() {
    return (
      <nav className="navbar" style={{display:'flex', gap: '20px',justifyContent:'center'}}>
        <a href="#home">Accueil</a>
        <a href="#students">Etudiants</a>
        <a href="#contact">Contact</a>
      </nav>
    );
  }
  export default Navbar;