import { useState } from "react";
import'./studentForm.css';
function StudentForm(){
    return (
        <div className="student-Form-container">
            <h2>Ajouter un Etudiant</h2>
            
            <label>Nom & Prénom : </label>
            <input 
                type="text"
                id="nom"
                name="nom"
                placeholder="saisir votre nom et prénom "
                required>
            </input>

            <label> Email : </label>
            <input 
                type="email"
                id="email"
                name="email"
                placeholder="saisir votre email"
                required>
               </input>

            <label> Téléphone : </label>
            <input 
                type="tel"
                id="telephone"
                name="telephone"
                placeholder="saisir votre téléphone"
                required
               ></input>

            <label htmlFor="filière"> Filière : </label>
            <select id="filiere" name="filiere" required>
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
                required
               ></input>

            <label> Groupe : </label>
            <input 
                type="text"
                id="groupe"
                name="groupe"
                placeholder="saisir votre groupe"
                required
               ></input>

            <label> Ville : </label>
            <input 
                type="text"
                id="ville"
                name="ville"
                placeholder="saisir votre ville"
                required
               ></input>

            <label htmlFor="image"> Image : </label>
            <input type="file" id="image" accept="image/*"></input>


        </div>
    )
};
export default StudentForm;