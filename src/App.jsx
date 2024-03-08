import XSvg from "./components/svg/Xsvg"
import Board from "./components/Board"
import { useEffect, useState } from "react"

function App() {
  const [isCircleTurn, setIsCircleTurn] = useState(false);
  const [gameGrid, setGameGrid] = useState(Array(9).fill(0));

  useEffect(() => {
    setIsCircleTurn(!isCircleTurn)
  }, [gameGrid])

  return (
    <>
      <div className="flex flex-col min-h-screen items-center">
      <Board gameGrid={gameGrid} setGameGrid={setGameGrid} isCircleTurn={isCircleTurn} />
      </div>
      {/* X SVG */}
      <svg width="125" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d={"M 10,10 L 90,90"} stroke={"#393E41"} strokeWidth="20" />
        <path d={"M 90,10 L 10,90"} stroke={"#393E41"} strokeWidth="20" />
      </svg>
      {/* CIRCLE SVG */}
      <svg width="125" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle r="37" cx="50" cy="50" fill="none" stroke={"#FFEED6"} strokeWidth="20" />
      </svg>
      <XSvg size="10vw" drawn />
    </>
  )
}

export default App
