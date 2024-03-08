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
      setWinLocation("M 23,10 L 23,90")
      return;
    }
    if (gameGrid[1] != 0 && gameGrid[1] == gameGrid[4] && gameGrid[4] == gameGrid[7]) {
      setWinner(gameGrid[1])
      setWinLocation("M 50,10 L 50,90")
      return;
    }
    if (gameGrid[2] != 0 && gameGrid[2] == gameGrid[5] && gameGrid[5] == gameGrid[8]) {
      setWinner(gameGrid[2])
      setWinLocation("M 77,10 L 77,90")
      return;
    }
    // ROWS
    if (gameGrid[0] != 0 && gameGrid[0] == gameGrid[1] && gameGrid[1] == gameGrid[2]) {
      setWinner(gameGrid[0])
      setWinLocation("M 10,23 L 90,23")
      return;
    }
    if (gameGrid[3] != 0 && gameGrid[3] == gameGrid[4] && gameGrid[4] == gameGrid[5]) {
      setWinner(gameGrid[3])
      setWinLocation("M 10,50 L 90,50")
      return;
    }
    if (gameGrid[6] != 0 && gameGrid[6] == gameGrid[7] && gameGrid[7] == gameGrid[8]) {
      setWinner(gameGrid[6])
      setWinLocation("M 10,77 L 90,77")
      return;
    }
    // DIAGONAL
    if (gameGrid[0] != 0 && gameGrid[0] == gameGrid[4] && gameGrid[4] == gameGrid[8]) {
      setWinner(gameGrid[0])
      setWinLocation("M 10,10 L 90,90")
      return;
    }
    if (gameGrid[2] != 0 && gameGrid[3] == gameGrid[4] && gameGrid[4] == gameGrid[6]) {
      setWinner(gameGrid[2])
      setWinLocation("M 90,10 L 10,90")
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
  }, [gameGrid])

  return (
    <div className="flex flex-col min-h-screen items-center">
      <Board gameGrid={gameGrid} setGameGrid={setGameGrid} isCircleTurn={isCircleTurn} winner={winner} winLocation={winLocation} />
    </div>
  )
}

export default App
