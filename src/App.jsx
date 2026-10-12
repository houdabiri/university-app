import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import photo from "./photo.jpg";

function App() {
  const etudiant = {
    nomPrenom: "Nour Houda Biri",
    email: "houdabiri4@gmail.com",
    telephone: "+216 25 014 889",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneedetude :"2026/2027",
    groupe: "GLSI 2",
    ville: "Mahdia"
  };

  return (

    <div className="card-container">
      <div className="student-card">
        <img src={photo} alt="student" className="student-img"/>

        <h2>Fiche étudiant</h2>
        <p>Nom & Prénom : {etudiant.nomPrenom}</p>
        <p>Email : {etudiant.email}</p>
        <p>Téléphone : {etudiant.telephone}</p>
        <p>Filière : {etudiant.filiere}</p>
        <p>Année d'étude :{etudiant.anneedetude}</p>
        <p>Groupe : {etudiant.groupe}</p>
        <p>Ville : {etudiant.ville}</p>

        <a href={'mailto:${etudiant.email}'}>
          <button className="contact-btn">contacter</button>
        </a>
      </div>
    </div>
  );
}

export default App
