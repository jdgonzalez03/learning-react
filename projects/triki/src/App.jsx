import confetti from "canvas-confetti";
import { useState } from "react";

import { Square } from "./components/Square";
import { WinnerModal } from "./components/WinnerModal";
import { TURNS } from "./constants";
import { checkWinnerFrom, checkEndGame } from "./logic/board";
import { saveGameToStorage, resetGameToStorage } from "./logic/storage";

function App() {
  //Estados
  const [board, setBoard] = useState(()=>{
    //Si hay datos en el navegador, inicializar el estado con eso.
    const boardFromLocalStorage = window.localStorage.getItem('board');
    if(boardFromLocalStorage) return JSON.parse(boardFromLocalStorage);
    return Array(9).fill(null); 
  }
  );

  const [turn, setTurn] = useState(()=> {
    //Cargando turno del localStorage
    const turnFromLocalStorage = window.localStorage.getItem('turn');
    return turnFromLocalStorage ?? TURNS.X;
  });

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
    //guardar partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    });
    // revisar ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  //Reiniciar el juego (Los estados vuelven al por defecto)
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameToStorage();
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
