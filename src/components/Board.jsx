import XSvg from "./svg/Xsvg";
import GridLines from "./GridLines";

function Board() {
    return (
        <>
            <div className="bg-green w-[12vw] h-[7vh] rounded-full my-[10vh]"></div>
            <div className="relative grid grid-cols-3 grid-rows-3 w-[max(25vw, 10vh)] h-[max(25vw, 10vh)] gap-10">
                {Array(9).fill(0).map((_, index) => index).map((index) => (
                    <div key={index} className="flex items-center justify-center hover:bg-puce bg-keppel cursor-pointer">
                        <XSvg size="7vw" drawn />
                    </div>
                ))}
                <GridLines />
            </div>
        </>
    )
}

export default Board;