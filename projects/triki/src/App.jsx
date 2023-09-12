import confetti from "canvas-confetti";
import { useState } from "react";

import { Square } from "./components/Square";
import { WinnerModal } from "./components/WinnerModal";
import { TURNS } from "./constants";
import { checkWinnerFrom, checkEndGame } from "./logic/board";


function App() {
  //Estados
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); //null no ganador, false empate

  const updateBoard = (index) => {
    //No actualizar la casilla si esta ocupada
    if (board[index] || winner) return;
    //actualizar tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // revisar ganador
    const newWinner = checkWinnerFrom(newBoard);

    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  //Reiniciar los estados a los valores que queramos.
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };
  return (
    <main className="board">
      <h1>Triki</h1>
      <button onClick={resetGame}>Reiniciar el juego.</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>

        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  );
}

export default App;
