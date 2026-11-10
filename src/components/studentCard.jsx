import './studentCard.css'
import {useState} from "react"
  
  function StudentCard(props) {
  const ville = props.ville || "Non renseignée";
  const [coordonneesVisibles,setcoordonneesVisibles]=useState(false);
  function basculerCoordonnees(){
    setcoordonneesVisibles(!coordonneesVisibles);
  };
  return (

    <div className="card-container">
      <div className="student-card">
        <img src={props.image} alt="Student" className="student-img"/>

        <h2>Fiche étudiant</h2>
        <p>Nom & Prénom : {props.nomPrenom} </p>
        {coordonneesVisibles &&(
          <>
          <p>Email : {props.email}</p>
          <p>Téléphone : {props.telephone}</p>
          </>
        )}
        <p>Filière : {props.filiere}</p>
        <p>Année d'étude :{props.anneedetude}</p>
        <p>Groupe : {props.groupe}</p>
        <p>Ville : {ville}</p>

        <a href={'mailto:${props.email}'} >
          <button className="contact-btn">contacter</button>
        </a>
        <button className='basculer-btn' onClick={basculerCoordonnees}>
          {coordonneesVisibles
            ? "Masquer les coordonnées"
            : "Afficher les coordonnées"}
        </button>
        
        <button className='supprimer-btn' onClick={()=> props.onSupprimer(props.email)}>supprimer</button>
        <button className='modifier-btn' onClick={()=> props.onModifier(props.email)}>modifier</button>
      </div>
    </div>
  )
};

export default StudentCard
