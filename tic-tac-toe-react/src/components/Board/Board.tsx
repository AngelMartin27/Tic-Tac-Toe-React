import Square from "../Square/Square.tsx";
import { calculateWinner } from "../Utiles/utiles.ts";

export default function Board({ xIsNext, squares, onPlay, rows, columns }: {xIsNext: boolean, squares: (string | null)[], onPlay: (nextSquares: (string | null)[]) => void, rows: number, columns: number}) {

  function handleClick(i: number): void {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'winner: ' + winner;
  } else {
    status = 'next player: ' + (xIsNext ? "X" : "O");
  }

  const board = [];
  for (let row = 0; row < rows; row++) {
    const rows = [];
    for (let column = 0; column < columns; column++) {
      const index = row * columns + column;
      rows.push(
        <Square key={index} value={squares[index]} onSquareClick={() => handleClick(index)}/>
      );
    }
    board.push(
      <div key={row} className="board-row">
        {rows}
      </div> 
    );
  }

  return (
    <>
      <div className="status">{status}</div>
      {board}
    </>
  );
}