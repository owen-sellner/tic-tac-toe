import { motion } from 'framer-motion';

function WinLine({ winner, winLocation }) {
    return (
        <div className="absolute w-[100%] top-0 left-0">
            <svg
                width="100%"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                    d={winLocation}
                    stroke={winner === 1 ? "#393E41" : "#FFEED6"}
                    strokeWidth="4"
                />
            </svg>
        </div>
    )
};

export default WinLine;