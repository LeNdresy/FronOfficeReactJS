import './RechercheMulti.css';
import React,{useState,useEffect} from 'react';

const RechercheMulti = (props) => {
    //Get Catégories
    const [categorie,setCategorie] = useState([]);
    const [etat,setEtat] = useState([]);
    const [enchere,setEncheres] = useState([]);

    useEffect(() => {
        fetch(
            "http://localhost:8080/categories",
            {
                method:"GET"
            }
        )
        .then((response) => response.json())
        .then((resultat) => {
            console.log(resultat.data);
            setCategorie(resultat.data);
        });

        fetch("http://localhost:8080/etats",
            {
                method:"GET"
            }
        )
        .then((response) => response.json())
        .then((result) => {
            console.log(result.data);
            setEtat(result.data);
        });

        fetch("http://localhost:8080/viewencheres",
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
        <><h1>Les Enchères </h1><>
            <form>
                <div class="tableR">
                    <div><b>Mot clé</b> <input type="text" name="motcle" /></div>
                    <div id="categorie"><b>Catégorie</b> 
                        {<select name="categorie"> {categorie.map((cat => <option key={cat.id} value={cat.id}>{cat.type}</option>
                        ))} </select> }
                    </div>
                    <div id="statut"><b>Statut</b> 
                        {<select name="statut"> {etat.map((stat => <option key={stat.id} value={stat.id}>{stat.type}</option>
                        ))}</select> }
                    </div>
                    <div></div>
                    <div id="date"><b>Date</b> <input type="date" name="date" /></div>
                    <div><b>Prix Min</b> <input type="text" name="prixmin" /></div>
                    <div><b>Prix Max</b> <input type="text" name="prixmax" /></div>

                    <div><button type="submit" class="search">Rechercher</button></div>
                </div>
            </form>
            <br></br>
            <div class="table">
                <div><b>Numéro</b></div>
                <div><b>Produit</b></div>
                <div><b>Catégorie</b></div>
                <div><b>Date et Heure Début</b></div>
                <div><b>Date et Heure Fin</b></div>
                <div><b>Prix Départ</b></div>
                <div><b>Prix Actuel</b></div>
                <div><b>Action</b></div>
            {enchere.map((enc =>
                <><div>enc000{enc.id}</div>
                <div>{enc.nomproduit}</div>
                <div>{enc.typecategorie}</div>
                <div>{enc.dateheuredebut}</div>
                <div>{enc.dateheurefin}</div>
                <div>{enc.prixdepart}</div>
                <div></div>
                <div id="action"><a href="historique"><button>Détails</button></a> <br></br><a href='login'><button>Renchérir</button></a></div></>
            ))}
            </div>
        </></>
    );
}
export default RechercheMulti;