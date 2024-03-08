import Board from "./components/Board"
import { useEffect, useState } from "react"

function App() {
  const [isCircleTurn, setIsCircleTurn] = useState(false);
  const [gameGrid, setGameGrid] = useState(Array(9).fill(0));

  useEffect(() => {
    setIsCircleTurn(!isCircleTurn);
  }, [gameGrid, setGameGrid])

  return (
    <div className="flex flex-col min-h-screen items-center">
      <Board gameGrid={gameGrid} setGameGrid={setGameGrid} isCircleTurn={isCircleTurn} />
    </div>
  )
}

export default App
