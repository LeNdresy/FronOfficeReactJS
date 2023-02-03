import React,{useState,useEffect} from 'react';
import './MesEncheres.css';
const MesEncheres = (props) => {
    const [enchere,setEncheres] = useState([]);
    useEffect(() => {
    fetch("http://localhost:8080/clients/1/encheres",
        {
            method:"GET"
        }
    )
    .then((response) => response.json())
    .then((result) => {
        console.log(result.data);
        setEncheres(result.data);
    });
    },[]);   

        return(
            <>
                <h1>Mes Enchères</h1>
                <div class="table">
                    <div><b>Numéro</b></div>
                    <div><b>Produit</b></div>
                    <div><b>Catégorie</b></div>
                    <div><b>Date et Heure Début</b></div>
                    <div><b>Date et Heure Fin</b></div>
                    <div><b>Prix Départ</b></div>
                    <div><b>Prix Actuel</b></div>
                    <div><b>Etat</b></div>
    
                {enchere.map((enc =>
                    <><div>enc000{enc.id}</div><div>{enc.nomproduit}</div><div>{enc.typecategorie}</div><div>{enc.dateheuredebut}</div><div>{enc.dateheurefin}</div><div>{enc.prixdepart}</div><div></div></>
                ))}
      
                </div>
                <br></br>
               <a href="/"><button>Retour</button></a>
            </>
        );
}
export default MesEncheres;