import { useState } from "react";
import { StudentContext } from "./StudentContext";
import { initialEtudiants } from "../data/student";

export function StudentProvider ({children}){
    const [etudiants , setEtudiants]=useState(initialEtudiants);
    return(
        <StudentContext.Provider value={{ etudiants,setEtudiants}}>
            {children}
        </StudentContext.Provider>
    )
}