import React from 'react';
import './MesEncheres.css';
const DetailsEnchere = (props) => {
        return(
            <>
                <h1>Détails</h1>
                <div class="table">
                    <div><b>Numéro</b></div>
                    <div><b>Produit</b></div>
                    <div><b>Catégorie</b></div>
                    <div><b>Date et Heure Début</b></div>
                    <div><b>Date et Heure Fin</b></div>
                    <div><b>Prix Départ</b></div>
                    <div><b>Prix Actuel</b></div>
                    <div><b>Etat</b></div>
    
                    <div>enc0001</div>
                    <div>PSR 975 YAMAHA</div>
                    <div>Musique</div>
                    <div>2023-01-02 08:00</div>
                    <div>2023-01-02 15:00</div>
                    <div>6000000</div>
                    <div>7000000</div>
                    <div>Fini</div>
      
                </div>
                <br></br>
               <a href='Login.js'><button>Retour</button></a>
            </>
        );
}
export default DetailsEnchere;