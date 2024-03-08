import XSvg from "./svg/Xsvg";
import GridLines from "./GridLines";
import Toggle from "./Toggle";
import CircleSvg from "./svg/CircleSvg";

function Board({ gameGrid, setGameGrid, isCircleTurn }) {

    const handleGridChange = (index) => {
        let newGameGrid = [...gameGrid];
        if (isCircleTurn) {
            newGameGrid[index] = 1;
        } else {
            newGameGrid[index] = 2;
        }
        setGameGrid(newGameGrid);
    };

    return (
        <>
            <Toggle isCircleTurn={isCircleTurn} />
            <div className="relative grid grid-cols-3 grid-rows-3 gap-10">
                {gameGrid.map((_, index) => (
                    <div key={index} className="flex items-center justify-center max-h-[125px] h-[15vw] max-w-[125px] w-[15vw] bg-keppel">
                        {gameGrid[index] == 0 && <div onClick={() => { handleGridChange(index) }} className="h-[100%] w-[100%] z-10 cursor-pointer"></div>}
                        {gameGrid[index] == 1 && <XSvg size="100%" drawn />}
                        {gameGrid[index] == 2 && <CircleSvg size="100%" drawn />}
                    </div>
                ))}
                <GridLines />
            </div>
        </>
    )
}

export default Board;