import { useState } from "react";
import'./studentForm.css';
function StudentForm({onAjouterEtudiant}){
    const [nomPrenom,setnomPrenom]=useState("");
    const [email,setemail]=useState("");
    const [telephone,settelephone]=useState("");
    const [filiere,setfiliere]=useState("");
    const [anneedetude,setanneedetude]=useState("");
    const [groupe,setgroupe]=useState("");
    const [ville,setville]=useState("");
    const [image,setimage]=useState("");
    function handleSubmit(e){
        e.preventDefault();
        const nouvelEtudiant={
            nomPrenom : nomPrenom,
            email:email,
            telephone:telephone,
            filiere:filiere,
            anneedetude:anneedetude,
            groupe:groupe,
            ville:ville,
            image:image,
        };
        console.log("Nouvel étudiant ajouté :", nouvelEtudiant);
        onAjouterEtudiant(nouvelEtudiant);
    }
    return (
        <form onSubmit={handleSubmit} className="student-Form-container">
            <h2>Ajouter un Etudiant</h2>
            
            <label>Nom & Prénom : </label>
            <input 
                type="text"
                id="nomPrenom"
                name="nomPrenom"
                placeholder="saisir votre nom et prénom "
                onChange={(e)=>setnomPrenom(e.target.value)}
                required>
            </input>

            <label> Email : </label>
            <input 
                type="email"
                id="email"
                name="email"
                placeholder="saisir votre email"
                onChange={(e)=>setemail(e.target.value)}
                required>
               </input>

            <label> Téléphone : </label>
            <input 
                type="tel"
                id="telephone"
                name="telephone"
                placeholder="saisir votre téléphone"
                onChange={(e)=>settelephone(e.target.value)}
                required
               ></input>

            <label htmlFor="filière"> Filière : </label>
            <select id="filiere" name="filiere"  onChange={(e)=>setfiliere(e.target.value)} required>
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
                placeholder="saisir votre année d'etude"
                onChange={(e)=>setanneedetude(e.target.value)}
                required
               ></input>

            <label> Groupe : </label>
            <input 
                type="text"
                id="groupe"
                name="groupe"
                placeholder="saisir votre groupe"
                onChange={(e)=>setgroupe(e.target.value)}
                required
               ></input>

            <label> Ville : </label>
            <input 
                type="text"
                id="ville"
                name="ville"
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

            <button type="submit" className="btn-submit">Ajouter</button>
        </form>
    )
};
export default StudentForm;