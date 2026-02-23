import Square from "../Square/Square";
import { calcularGanador } from "../Utiles/utiles.js";

export default function Board({ xIsNext, squares, onPlay, rows, columns }) {

  function handleClick(i) {
    if (calcularGanador(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const ganador = calcularGanador(squares);
  let estado;
  if (ganador) {
    estado = 'Ganador: ' + ganador;
  } else {
    estado = 'Siguiente Jugador: ' + (xIsNext ? "X" : "O");
  }

  const tablero = [];
  for (let row = 0; row < rows; row++) {
    const filaArray = [];
    for (let column = 0; column < columns; column++) {
      const indice = row * columns + column;
      filaArray.push(
        <Square key={indice} value={squares[indice]} onSquareClick={() => handleClick(indice)}/>
      );
    }
    tablero.push(
      <div key={row} className="board-row">
        {filaArray}
      </div>
    );
  }

  return (
    <>
      <div className="estado">{estado}</div>
      {tablero}
    </>
  );
}