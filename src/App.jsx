import Board from "./components/Board"
import { useEffect, useState } from "react"

function App() {
  const [isCircleTurn, setIsCircleTurn] = useState(false);
  const [gameGrid, setGameGrid] = useState(Array(9).fill(0));
  const [winner, setWinner] = useState(-1);
  const [winLocation, setWinLocation] = useState("");

  const checkGrid = () => {
    // COLUMNS
    if (gameGrid[0] != 0 && gameGrid[0] == gameGrid[3] && gameGrid[3] == gameGrid[6]) {
      setWinner(gameGrid[0])
      // TODO: Add win location
      return;
    }
    if (gameGrid[1] != 0 && gameGrid[1] == gameGrid[4] && gameGrid[4] == gameGrid[7]) {
      setWinner(gameGrid[1])
      // TODO: Add win location
      return;
    }
    if (gameGrid[2] != 0 && gameGrid[2] == gameGrid[5] && gameGrid[5] == gameGrid[8]) {
      setWinner(gameGrid[2])
      // TODO: Add win location
      return;
    }
    // ROWS
    if (gameGrid[0] != 0 && gameGrid[0] == gameGrid[1] && gameGrid[1] == gameGrid[2]) {
      setWinner(gameGrid[0])
      // TODO: Add win location
      return;
    }
    if (gameGrid[3] != 0 && gameGrid[3] == gameGrid[4] && gameGrid[4] == gameGrid[5]) {
      setWinner(gameGrid[3])
      // TODO: Add win location
      return;
    }
    if (gameGrid[6] != 0 && gameGrid[6] == gameGrid[7] && gameGrid[7] == gameGrid[8]) {
      setWinner(gameGrid[6])
      // TODO: Add win location
      return;
    }
    // DIAGONAL
    if (gameGrid[0] != 0 && gameGrid[0] == gameGrid[4] && gameGrid[4] == gameGrid[8]) {
      setWinner(gameGrid[0])
      // TODO: Add win location
      return;
    }
    if (gameGrid[2] != 0 && gameGrid[3] == gameGrid[4] && gameGrid[4] == gameGrid[6]) {
      setWinner(gameGrid[2])
      // TODO: Add win location
      return;
    }
    // DRAW 
    let result = true;
    for (let i = 0; i < gameGrid.length; i++) {
      if (gameGrid[i] == 0) {
        result = false;
      }
    }
    if (result) {
      setWinner(0);
    }
  }

  useEffect(() => {
    setIsCircleTurn(!isCircleTurn);
    checkGrid();
  }, [gameGrid, setGameGrid])

  return (
    <div className="flex flex-col min-h-screen items-center">
      <Board gameGrid={gameGrid} setGameGrid={setGameGrid} isCircleTurn={isCircleTurn} winner={winner} />
    </div>
  )
}

export default App
