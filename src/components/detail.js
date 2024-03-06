import { useParams } from "react-router-dom";
const { useEffect, useState } = require("react");

export default function Detail() {
 const params = useParams();
 const [mascota, setMascota] = useState({});
 const [mascotas, setMascotas] = useState([]);

const fetchData = async() => {
    
    const URL =
     "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
        
     let respuesta = await fetch (URL)
     let mascotasRespuesta = await respuesta.json()
     setMascotas(mascotasRespuesta)
     for (const mascotaElegida of mascotasRespuesta){
        if (mascotaElegida.id == params.mascotaId){
            setMascota(mascotaElegida)
        }
     }

    }
    


 useEffect(() => {
    fetchData()
    console.log(mascotas);
    console.log(mascota);
 }, []);   

 return (
   <div>
     <h1>{mascota.nombre}</h1>
     <img src={mascota.foto} alt="Foto de mascota" style={{"height":"400px"}}></img>
     <h2>{mascota.raza}</h2>
   </div>
 );
}