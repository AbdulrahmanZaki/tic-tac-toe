import { useState } from "react";
import Reset from "./Reset";
import SquarePlate from "./SquarePlate";
import "./index.css";

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill());
  // const winner = calculateWinner(squares);
  const result = calculateWinner(squares);
  const winner = result ? result.winner : null;
  const winningSquares = result ? result.winningSquares : [];
  let status;

  //check the status to update it
  if (!winner) {
    if (squares.some((item) => item === null)) {
      status = "next player: " + (xIsNext ? "X" : "O");
    } else {
      status = "Draw";
    }
  } else {
    status = "winner: " + winner;
  }

  //handle what happens when clicking a square in the board
  function handleCLick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const tempSquares = squares.slice();
    if (xIsNext) {
      tempSquares[i] = "X";
    } else {
      tempSquares[i] = "O";
    }

    setSquares(tempSquares);
    setXIsNext(!xIsNext);
  }

  //reset the board
  function resetSquares() {
    setSquares(Array(9).fill(null));
    //  setSquares([]);
    setXIsNext("X");
    // setXIsNext(true);
  }
  return (
    <>
      <p className="status" style={{ color: winner ? "green" : "black" }}>
        {status}
      </p>
      <div className="board-row">
        <SquarePlate
          onSquareClick={() => handleCLick(0)}
          value={squares[0]}
          isWinningSquare={winningSquares.includes(0)}
        />
        <SquarePlate
          onSquareClick={() => handleCLick(1)}
          value={squares[1]}
          isWinningSquare={winningSquares.includes(1)}
        />
        <SquarePlate
          onSquareClick={() => handleCLick(2)}
          value={squares[2]}
          isWinningSquare={winningSquares.includes(2)}
        />
      </div>
      <div className="board-row">
        <SquarePlate
          onSquareClick={() => handleCLick(3)}
          value={squares[3]}
          isWinningSquare={winningSquares.includes(3)}
        />
        <SquarePlate
          onSquareClick={() => handleCLick(4)}
          value={squares[4]}
          isWinningSquare={winningSquares.includes(4)}
        />
        <SquarePlate
          onSquareClick={() => handleCLick(5)}
          value={squares[5]}
          isWinningSquare={winningSquares.includes(5)}
        />
      </div>
      <div className="board-row">
        <SquarePlate
          onSquareClick={() => handleCLick(6)}
          value={squares[6]}
          isWinningSquare={winningSquares.includes(6)}
        />
        <SquarePlate
          onSquareClick={() => handleCLick(7)}
          value={squares[7]}
          isWinningSquare={winningSquares.includes(7)}
        />
        <SquarePlate
          onSquareClick={() => handleCLick(8)}
          value={squares[8]}
          isWinningSquare={winningSquares.includes(8)}
        />
      </div>
      <Reset className="reset-btn" resetClick={resetSquares} />
    </>
  );
}

//determining the winner
function calculateWinner(squares) {
  const possibleWinLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < possibleWinLines.length; i++) {
    const [a, b, c] = possibleWinLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // return squares[a];
      return { winner: squares[a], winningSquares: [a, b, c] };
    }
  }
  return null;
}

export default App;
