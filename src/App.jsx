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
import StudentForm from './components/studentForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home";
import Etudiant from './pages/Etudiant';
import DetailEtudiant from './pages/detailEtudiant';
import Contact from './pages/contact';
import NotFound from './pages/notFound';
import{StudentProvider} from "./context/StudentProvider";


  function App() {

  {/* const [ etudiant,setEtudiants] = useState([
  {
  id:1,
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
    id:2,
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
    id:3,
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
    id:4,
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
      id:5,
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

  function supprimerEtudiant(id){
    setEtudiants(
      (
        anciensEtudiants,
      )=> anciensEtudiants.filter((etudiant)=> etudiant.id!==id),
    );
     
  };

 {/* function modifierEtudiant(id){
    const nouveaunomPrenom = prompt("saisir le nouveau nom et prénom : ");
    if (
      nouveaunomPrenom !== null &&
      nouveaunomPrenom.trim() !== ""
    ){
      setEtudiants((anciensEtudiants)=>
      anciensEtudiants.map(
        (etudiant) =>
         etudiant.id === id
          ?{
            ...etudiant,
            nomPrenom : nouveaunomPrenom.trim(),
          }
          : etudiant,
      ),
    );
    }

  };


  const [recherche, setRecherche] = useState("");
  const etudiantsFiltres = etudiant.filter(
    (etudiant) => etudiant.filiere.toLowerCase().includes(recherche.toLowerCase()),
  )

  function ajouterEtudiant(nouvelEtudiant){
    const etudiantAvecId ={
      ...nouvelEtudiant,
      id: Date.now(),
    };
    setEtudiants((anciensEtudiants)=>[...anciensEtudiants,etudiantAvecId]);
  };

  const [etudiantModifier , setEtudiantModifier]=useState(null);
   function ModifierEtudiant(etudiant){
     setEtudiantModifier(etudiant);
   };

   function enregistrerModification(etudiantModifier){
     setEtudiants((anciensEtudiants)=>
      anciensEtudiants.map((etudiant)=> 
         etudiant.id === etudiantModifier.id
          ? { ...etudiantModifier,id: etudiant.id}
          : etudiant,
        ),
      );
      setEtudiantModifier(null);
   };
  */}
  return (
    <StudentProvider>
    <BrowserRouter>
      <Header />
      <Navbar />
     {/* <StudentForm 
         key={etudiantModifier ? etudiantModifier.id : "nouveau"}
         onAjouterEtudiant={ajouterEtudiant}
         etudiantModifier={etudiantModifier}
         onModifierEtudiant={enregistrerModification}
         />
     {/* <button className ="ajouter-btn" onClick={ajouterEtudiant}> Ajouter étudiant </button>
      <input 
          type="text"
          className='search-input'
          placeholder='Rechercher par filière...'
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}></input>
     <div className="card-container">
      {etudiantsFiltres.map((etudiant)=>(
      <StudentCard
        key={etudiant.id}
        id={etudiant.id}
        etudiant={etudiant}
        nomPrenom={etudiant.nomPrenom}
        email={etudiant.email}
        telephone={etudiant.telephone}
        filiere={etudiant.filiere}
        anneedetude={etudiant.anneedetude}
        groupe={etudiant.groupe}
        ville={etudiant.ville}
        image={etudiant.image}
        onSupprimer={supprimerEtudiant}
        onModifier={ModifierEtudiant}
      />
      ))}
      </div>*/}

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/etudiant' element={<Etudiant />}/>
        <Route path='/etudiant/:id' element={<DetailEtudiant />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
     <Footer />
    </BrowserRouter>
    </StudentProvider>
  );
}

export default App
