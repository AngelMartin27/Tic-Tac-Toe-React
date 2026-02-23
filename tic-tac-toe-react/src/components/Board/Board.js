import Square from "../Square/Square";
import { calcularGanador } from "../Utiles/utiles.js";

export default function Board({ xIsNext, squares, onPlay }) {
  const filas = 3;
  const columnas = 3;

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
  for (let fila = 0; fila < filas; fila++) {
    const filaArray = [];
    for (let columna = 0; columna < columnas; columna++) {
      const indice = fila * columnas + columna;
      filaArray.push(
        <Square key={indice} value={squares[indice]} onSquareClick={() => handleClick(indice)}/>
      );
    }
    tablero.push(
      <div key={fila} className="board-row">
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