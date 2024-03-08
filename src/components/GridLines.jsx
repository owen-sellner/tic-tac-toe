import { motion } from 'framer-motion';

function GridLines() {
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
                    d={"M 32,0 L 32,100"}
                    stroke={"#25A192"}
                    strokeWidth="5"
                />
                <motion.path
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 1 }}
                    d={"M 69,0 L 69,100"}
                    stroke={"#25A192"}
                    strokeWidth="5"
                />
                <motion.path
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 1 }}
                    d={"M 0,32 L 100,32"}
                    stroke={"#25A192"}
                    strokeWidth="5"
                />
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                    d={"M 0,69 L 100,69"}
                    stroke={"#25A192"}
                    strokeWidth="5"
                />
            </svg>
        </div>
    )
};

export default GridLines;