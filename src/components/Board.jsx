import GridLines from "./GridLines";

function Board() {
    return (
        <>
            <div className="bg-green w-[12vw] h-[7vh] rounded-full my-[10vh]"></div>
            <div className="relative grid grid-cols-3 grid-rows-3 w-[max(25vw, 10vh)] h-[max(25vw, 10vh)] gap-10">
                {Array(9).fill(0).map((_, index) => index).map((index) => (
                    <div key={index} className="flex items-center justify-center hover:bg-puce bg-keppel cursor-pointer">
                        <svg width="125" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path d={"M 10,10 L 90,90"} stroke={"#393E41"} stroke-width="20" />
                            <path d={"M 90,10 L 10,90"} stroke={"#393E41"} stroke-width="20" />
                        </svg>
                    </div>
                ))}
                <GridLines />
            </div>
        </>
    )
}

export default Board;