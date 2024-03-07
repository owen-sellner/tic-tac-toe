
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-center">
        <div className="flex justify-center">
          {/* X SVG */}
          <svg width="16vw" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d={"M 10,10 L 90,90"} stroke={"#393E41"} stroke-width="20" />
            <path d={"M 90,10 L 10,90"} stroke={"#393E41"} stroke-width="20" />
          </svg>
          {/* CIRCLE SVG */}
          <svg width="16vw" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle r="37" cx="50" cy="50" fill="none" stroke={"#FFEED6"} stroke-width="20" />
          </svg>
        </div>
        <h1 className={`text-[min(50vw,10vh)] mt-10 text-center uppercase font-bold text-onyx`}>draw!</h1>
      </div>
      {/* X SVG */}
      <svg width="125" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d={"M 10,10 L 90,90"} stroke={"#393E41"} stroke-width="20" />
        <path d={"M 90,10 L 10,90"} stroke={"#393E41"} stroke-width="20" />
      </svg>
      {/* CIRCLE SVG */}
      <svg width="125" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle r="37" cx="50" cy="50" fill="none" stroke={"#FFEED6"} stroke-width="20" />
      </svg>
    </>
  )
}

export default App
