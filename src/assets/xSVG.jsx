function xSVG(size, drawn=false) {
    return (
        <>
            <svg width={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d={"M 10,10 L 90,90"} stroke={"#393E41"} stroke-width="20" />
                <path d={"M 90,10 L 10,90"} stroke={"#393E41"} stroke-width="20" />
            </svg>
        </>
    )
}

export default xSVG;