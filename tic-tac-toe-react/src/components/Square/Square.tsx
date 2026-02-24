import React from 'react';

export default function Square({
  value,
  onSquareClick,
}: {
  value: string | null,
  onSquareClick: () => void
}) {
  return (
    <button
      className="square"
      type="button"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
