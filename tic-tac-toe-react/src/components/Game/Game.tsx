import React, { useState, useCallback } from 'react';
import Board from '../Board/Board';

export default function Game() {
  const [rows] = useState(3);
  const [columns] = useState(3);
  const totalBoxes = rows * columns;

  const [history, setHistory] = useState([Array(totalBoxes).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = useCallback((nextSquares: (string | null)[]): void => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }, [history, currentMove]);

  function jumpTo(nextMove: number): void {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={description}>
        <button type="button" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          rows={rows}
          columns={columns}
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
