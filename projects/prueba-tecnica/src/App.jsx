import { useEffect, useState } from "react"
import "./App.css"
import { getRandomFact } from "./services/facts";
import {useCatImage} from "./hooks/useCatImage"

//const CAT_ENDPOINT_RANDOM_IMAGE = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;
const CAT_PREFIX_RANDOM_IMAGE_URL = 'https://cataas.com/';

export function App(){

  const [fact, setFact] = useState();
  const { imageUrl } = useCatImage({fact});
  
  //Obtener datos de la api. -> APRENDER FETCH A FONDO.
  //Obtener cita de la primera api al recargar la pagina.
  useEffect(()=> {
    getRandomFact().then(newFact => setFact(newFact));
  },[]);

  //Cambiar cita mediante un click
  const handleClick = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);  
  }
  //RENDERIZADO CONDICIONAL. 
  return (
    <main>
      <h1>App de Gatitos.</h1>
      <button onClick={handleClick}>Get new fact!</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_RANDOM_IMAGE_URL}${imageUrl}`} alt={`The firts three words extracted from ${fact}`}/>}
    </main>
  )
}