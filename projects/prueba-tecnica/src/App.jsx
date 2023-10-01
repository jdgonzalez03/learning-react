import {useCatImage} from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useFactFact";
import './App.css'

export function App(){

  const {fact, refreshRandomFact} = useCatFact();
  const { imageUrl } = useCatImage({fact});

  const handleClick = async () => {
    refreshRandomFact();
  }

  return (
    <main>
      <h1>App de Gatitos.</h1>

      <button onClick={handleClick}>Get new fact!</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`The firts three words extracted from ${fact}`}/>}
    </main>
  )
}