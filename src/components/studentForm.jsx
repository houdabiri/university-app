import { useState } from "react";
import'./studentForm.css';
function StudentForm({
    onAjouterEtudiant,
    etudiantModifier,
    onModifierEtudiant
}){
    const [nomPrenom,setnomPrenom]=useState(etudiantModifier?.nomPrenom || "");
    const [email,setemail]=useState(etudiantModifier?.email|| "");
    const [telephone,settelephone]=useState(etudiantModifier?.telephone || "");
    const [filiere,setfiliere]=useState(etudiantModifier?.filiere || "");
    const [anneedetude,setanneedetude]=useState(etudiantModifier?.anneedetude || "");
    const [groupe,setgroupe]=useState(etudiantModifier?.groupe || "");
    const [ville,setville]=useState(etudiantModifier?.ville || "");
    const [image,setimage]=useState(etudiantModifier?.image || "");
    function handleSubmit(e){
        e.preventDefault();

        const nouvelEtudiant={
            nomPrenom :nomPrenom,
            email:email,
            telephone:telephone,
            filiere:filiere,
            anneedetude:anneedetude,
            groupe:groupe,
            ville:ville,
            image:image,
        };
        if (!validerFormulaire()){
            return;
        }
        if (etudiantModifier){
            onModifierEtudiant({
                ...etudiantModifier,
                ...nouvelEtudiant,
            });
        }else{
            onAjouterEtudiant(nouvelEtudiant);
        }
       {/* console.log("Nouvel étudiant ajouté :", nouvelEtudiant);
           onAjouterEtudiant(nouvelEtudiant);*/}
    }

    const[erreurs, setErreurs]=useState({});

    function validerFormulaire(){
        const nouvellesErreurs = {};
        if (!nomPrenom.trim()){
            nouvellesErreurs.nomPrenom = "Nom & prénom obligatoire";
        }
        setErreurs(nouvellesErreurs);
        return object.keys(nouvellesErreurs).length ===0;
    }
    return (
        <form onSubmit={handleSubmit} className="student-Form-container">
            <h2>{etudiantModifier ? "Modifier l'étudiant" : "Ajouter un étudiant"}</h2>
            
            <label>Nom & Prénom : </label>
            <input 
                type="text"
                id="nomPrenom"
                name="nomPrenom"
                value={nomPrenom}
                placeholder="saisir votre nom et prénom "
                onChange={(e)=>setnomPrenom(e.target.value)}
                required>
            </input>
            {erreurs.nomPrenom && <p className="error-msg">{erreurs.nomPrenom}</p>}

            <label> Email : </label>
            <input 
                type="email"
                id="email"
                value={email}
                name="email"
                placeholder="saisir votre email"
                onChange={(e)=>setemail(e.target.value)}
                required>
               </input>

            <label> Téléphone : </label>
            <input 
                type="tel"
                id="telephone"
                value={telephone}
                name="telephone"
                placeholder="saisir votre téléphone"
                onChange={(e)=>settelephone(e.target.value)}
                required
               ></input>

            <label htmlFor="filière"> Filière : </label>
            <select id="filiere" name="filiere" value={filiere} onChange={(e)=>setfiliere(e.target.value)} required>
                <option value=""> Choisir une filière </option>
                <option value="GLSI">GLSI</option>
                <option value="DSI">DSI</option>
                <option value="RSI">RSI</option>
            </select>

            <label> Année d'étude : </label>
            <input 
                type="text"
                id="anneedetude"
                name="anneedetude"
                value={anneedetude}
                placeholder="saisir votre année d'etude"
                onChange={(e)=>setanneedetude(e.target.value)}
                required
               ></input>

            <label> Groupe : </label>
            <input 
                type="text"
                id="groupe"
                name="groupe"
                value={groupe}
                placeholder="saisir votre groupe"
                onChange={(e)=>setgroupe(e.target.value)}
                required
               ></input>

            <label> Ville : </label>
            <input 
                type="text"
                id="ville"
                name="ville"
                value={ville}
                placeholder="saisir votre ville"
                onChange={(e)=>setville(e.target.value)}
                required
               ></input>

            <label htmlFor="image"> Image : </label>
            <input
                   type="file"
                   id="image" 
                   accept="image/*"
                   onChange={(e)=>{
                       const fichier=e.target.files[0];
                       if (fichier){
                           setimage(url.createObjectURL(fichier));
                       }
                   }}
                   ></input>

            <button type="submit" className="btn-submit">{etudiantModifier ? "Modifier" : "Ajouter"}</button>
        </form>
    )
};
export default StudentForm;