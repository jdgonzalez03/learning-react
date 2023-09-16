import { useEffect, useState } from "react";

function App() {
  //Estados
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // pointer move
  useEffect(() => {
    console.log('effect ', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log('handleMove', { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }

    //Limpiar o resetear los useEffect
    //Se ejecuta cuando cambian las dependencias o se desmonta el renderizado
    return () => {
      console.log('limpieza');
      window.removeEventListener('pointermove', handleMove);
    }
  }, [enabled])

  const handleClick = () => setEnabled(!enabled)
  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <h3>Mouse Follower</h3>
      <button onClick={handleClick}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  );
}
export default App;
