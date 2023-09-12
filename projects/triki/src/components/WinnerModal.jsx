import { Square } from "./Square";

export function WinnerModal({winner, resetGame}) {
  if (winner === null) return null;
  
  const winnerText = winner === false ? "Empate" : "Ganó:";

  return (
    //Modal winner
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>
      </div>

      <footer>
        <button onClick={resetGame}>Empezar de nuevo</button>
      </footer>
    </section>
  );
}
