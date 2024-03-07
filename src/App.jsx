
function App() {
  const test = false;
  return (
    <>
      <h1 className={`text-[min(90vw,40vh)] uppercase font-bold ${test ? "text-red-600" : "text-blue-600"}`}>X O</h1>
      <h1 className={`text-[min(50vw,10vh)] uppercase font-bold ${test ? "text-red-600" : "text-blue-600"}`}>winner!</h1>
      {/* X SVG */}
      <svg width="125" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d={"M 10,10 L 90,90"} stroke={"black"} stroke-width="20" />
        <path d={"M 90,10 L 10,90"} stroke={"black"} stroke-width="20" />
      </svg>
      {/* CIRCLE SVG */}
      <svg width="125" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle r="37" cx="50" cy="50" fill="none" stroke={"black"} stroke-width="20" />
      </svg>
    </>
  )
}

export default App
