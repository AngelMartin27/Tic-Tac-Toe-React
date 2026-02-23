import Square from "../Square/square";
import {calcularGanador} from "../Utiles/Utiles.js";

export default function Board({xIsNext, squares, onPlay}) {
  function handleClick(i) {
    if (calcularGanador(squares) || squares[i]){
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const ganador = calcularGanador(squares);
  let estado;
  if (ganador) {
    estado = 'Ganador' + ganador;
  } else {
    estado = 'Siguiente Jugador: ' + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="estado">{estado}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  );
}