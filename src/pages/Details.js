import './Details.css';
import React,{useEffect,useState} from 'react';
const Details = (props) => {

    const [detail,setDetail] = useState([]);
    useEffect(() => {
    fetch("http://localhost:8080/encheres/1/details",
        {
            method:"GET"
        }
    )
    .then((response) => response.json())
    .then((result) => {
        console.log(result.data);
        setDetail(result.data);
    });
    },[]);   

    return(
        <>
            <h1>Historique</h1>
            <div class="table">
                <div><b>Clients</b></div>
                <div><b>Prix</b></div>
                {detail.map((det =>
                    <><div>{det.nom}</div><div>{det.prix}</div></>
                 ))}
  
            </div>
            <br></br>
           <a href="/"><button>Retour</button></a>
        </>
    );
}
export default Details;