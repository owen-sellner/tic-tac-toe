import { motion } from "framer-motion";

const toggleVariants = {
    off: {
        pathLength: 0.25,
        pathOffset: 0.2,
        transition: {
            duration: 0.5,
        }
    },

    on: {
        pathLength: 0.25,
        pathOffset: 0.55,
        transition: {
            duration: 0.5,
        }
    }
};

function Toggle({ isCircleTurn }) {
    return (
        <>
            <div className="max-w-[300px] w-[65vw] my-[5vh]">
                <svg width="100%" viewBox="0 0 50 30" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        strokeLinecap="round"
                        stroke="#25A192"
                        strokeWidth={10}
                        d="M 10,15 L 40,15"
                    />
                    <motion.path
                        variants={toggleVariants}
                        animate={isCircleTurn ? "off" : "on"}
                        stroke="#2DBDAC"
                        strokeWidth={8}
                        strokeLinecap="round"
                        d="M 0, 15 L 50, 15"
                    />
                    <path d={"M 14,12 L 18,18"} stroke={"#393E41"} strokeWidth={1} />
                    <path d={"M 14,18 L 18,12"} stroke={"#393E41"} strokeWidth={1} />
                    <circle r="3" cx="34" cy="15" fill="none" stroke={"#FFEED6"} strokeWidth={1} />
                </svg>
            </div>
        </>
    );
};

export default Toggle;
