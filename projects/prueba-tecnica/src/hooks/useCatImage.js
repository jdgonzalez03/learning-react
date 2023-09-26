import { useState, useEffect } from "react";

//Creando customHooks
export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();
  //Obtener imagen cuando cambie el fact.
  useEffect(() => {
    if (!fact) return;

    const words = fact.split(" ").slice(0, 3).join(" ");
    console.log(words);

    //TODO: Exportar funcion en archivo JS.
    fetch(`https://cataas.com/cat/says/${words}?size=50&color=red&json=true`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        const { url } = response;
        setImageUrl(url);
      });
  }, [fact]);

  return { imageUrl };
} // {imageURl: 'htpps://...'}
