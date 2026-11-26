import "./detailEtudiant.css";
import {useParams,Link} from "react-router-dom";
import {initialEtudiants} from "../data/student";
import {StudentContext} from "../context/StudentContext";
import {useContext} from "react";

function DetailEtudiant(){
    const {id} = useParams();
    const {etudiants} = useContext(StudentContext);

    const etudiant = etudiants.find(
        (etudiant) => etudiant.id === Number(id),
    );

    if (!etudiant){
        return(
            <section className="detail-etudiant">
                <h2>Etudiant introuvable !</h2>
                <Link className="retour-link" to="/etudiant">
                    Retour à la liste
                </Link>
            </section>
        );
    }
    return(
        <section className="detail-etudiant">
            <Link className="retour-link" to="/etudiant">
            Retour à la liste
            </Link>
            <h2>Détail de l'étudiant</h2>
            <img src ={etudiant.image} alt="Photo de l'étudiant"></img>
            <p><strong>Id :</strong> {etudiant.id}</p>
            <p><strong>Nom & Prenom :</strong> {etudiant.nomPrenom}</p>
            <p><strong>Email :</strong> {etudiant.email}</p>
            <p><strong>Téléphone :</strong> {etudiant.telephone}</p>
            <p><strong>Filière :</strong> {etudiant.filiere}</p>
            <p><strong>Année d'étude :</strong> {etudiant.anneedetude}</p>
            <p><strong>Groupe :</strong> {etudiant.groupe}</p>
            <p><strong>Ville :</strong> {etudiant.ville || "Non renseignée"}</p>
        </section>
    )

};

export default DetailEtudiant;