
import "./Etudiant.css";
import StudentCard from "../components/studentCard";
import StudentForm from "../components/studentForm";
import { initialEtudiants} from "../data/student";
import{useState,useContext} from "react";
import{StudentContext} from "../context/StudentContext";

function Etudiant(){
    const [recherche, setRecherche]=useState("");
    const {etudiants, setEtudiants}=useContext(StudentContext);
    const [etudiantModifier , setEtudiantModifier]=useState(null);
    const etudiantsFiltres = etudiants.filter(
      (etudiant) => etudiant.filiere.toLowerCase().includes(recherche.toLowerCase()),
    )
    const [afficherFormulaire, setAfficherFormulaire]=useState(false);
    function ajouterEtudiant(nouvelEtudiant){
        const etudiantAvecId ={
          ...nouvelEtudiant,
          id: Date.now(),
        };
    };

    function supprimerEtudiant(id){
        setEtudiants(
          (
            anciensEtudiants,
          )=> anciensEtudiants.filter((etudiant)=> etudiant.id!==id),
        );
     };

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

   return(
     <div className="etudiant-page">
       <StudentForm 
         key={etudiantModifier ? etudiantModifier.id : "nouveau"}
         onAjouterEtudiant={ajouterEtudiant}
         etudiantModifier={etudiantModifier}
         onModifierEtudiant={enregistrerModification}
         />
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
      </div>

     </div>
   )   
     
   
}  
export default Etudiant