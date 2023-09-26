import { useEffect, useState } from "react"
import "./App.css"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
//const CAT_ENDPOINT_RANDOM_IMAGE = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;
const CAT_PREFIX_RANDOM_IMAGE_URL = 'https://cataas.com/';

export function App(){

  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  //Obtener datos de la api. -> APRENDER FETCH A FONDO.
  //Obtener cita de la primera api al recargar la pagina.
  useEffect(()=>{
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json()) //conveirto a json
      .then(data => {  //extraer datos
        const {fact} = data;
        setFact(fact);
      });  
  }, []);

  //Obtener imagen cuando cambie el fact.
  useEffect(()=>{
    if (!fact) return

    const words = fact.split(' ').slice(0, 3).join(' ');
    console.log(words);

    fetch(`https://cataas.com/cat/says/${words}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        console.log(response);
        const {url} = response;
        setImageUrl(url);
      })
  },[fact]);

  
  //RENDERIZADO CONDICIONAL. 
  return (
    <main>
      <h1>App de Gatitos.</h1>
      
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_RANDOM_IMAGE_URL}${imageUrl}`} alt={`The firts three words extracted from ${fact}`}/>}
    </main>
  )
}