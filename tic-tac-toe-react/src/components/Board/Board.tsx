import React from 'react';
import Square from '../Square/Square';
import calculateWinner from '../Utils/utils';

export default function Board({
  xIsNext,
  squares,
  onPlay,
  rows,
  columns,
}: {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
  rows: number;
  columns: number;
}) {
  function handleClick(i: number): void {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `winner: ${winner}`;
  } else {
    status = `next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const board = [];
  for (let row = 0; row < rows; row += 1) {
    const boardRows = [];
    for (let column = 0; column < columns; column += 1) {
      const index = row * columns + column;
      boardRows.push(
        <Square key={index} value={squares[index]} onSquareClick={() => handleClick(index)} />,
      );
    }
    board.push(
      <div key={row} className="board-row">
        {boardRows}
      </div>,
    );
  }

  return (
    <>
      <div className="status">{status}</div>
      {board}
    </>
  );
}
