import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import StudentCard from "./components/studentCard.jsx";
import photo from "./photo.jpg"
import photo2 from "./photo2.jpg"
import photo3 from "./photo3.jpg"
import photo4 from "./photo4.jpg"
import photo5 from "./photo5.png"
import Header from './components/header'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { useState } from 'react'


  function App() {
   const [ etudiant,setEtudiants] = useState([
  {
  nomPrenom: "Nour Houda Biri",
  email: "houdabiri4@gmail.com",
  telephone: "+216 25 014 889",
  filiere: "Génie Logiciel et Systèmes d'Information",
  anneedetude :"2026/2027",
  groupe: "GLSI 2",
  ville: "Mahdia",
  image: photo,
  },
  {
    nomPrenom: "Sarra Trabelsi",
    email: "sarraTrabelsi@gmail.com",
    telephone: "+216 22 345 678",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneedetude :"2026/2027",
    groupe: "GLSI 2",
    ville: "Sousse",
    image: photo2,
  },
  {
    nomPrenom: "Slim Boubaker",
    email: "slimBoubaker@gmail.com",
    telephone: "+216 26 564 789",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneedetude :"2026/2027",
    groupe: "GLSI 2",
    ville: "Monastir",
    image: photo3,
   },
   {
    nomPrenom: "Kader Ben Ali",
    email: "KaderBenAli@gmail.com",
    telephone: "+216 21 989 513",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneedetude :"2026/2027",
    groupe: "GLSI 2",
    image: photo4,
  },
]);

  function ajouterEtudiant(){
    const nouvelEtudiant = {
      nomPrenom: "Rayen Ben Salem",
      email: "RayenBenSalem@gmail.com",
      telephone: "+216 44 444 444",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneedetude :"2026/2027",
      groupe: "GLSI 2",
      ville: "Sfax",
      image: photo5,
    };
    setEtudiants([...etudiant, nouvelEtudiant]);
  }; 
  
  return (
    <div>
      <Header />
      <Navbar />
      <button className ="ajouter-btn" onClick={ajouterEtudiant}>Ajouter un étudiant</button>
     <div className="card-container">
      {etudiant.map((etudiant)=>(
      <StudentCard
        key={etudiant.email}
        nomPrenom={etudiant.nomPrenom}
        email={etudiant.email}
        telephone={etudiant.telephone}
        filiere={etudiant.filiere}
        anneedetude={etudiant.anneedetude}
        groupe={etudiant.groupe}
        ville={etudiant.ville}
        image={etudiant.image}
      />
      ))}
     </div>
     <Footer />
    </div>
  );
}

export default App
