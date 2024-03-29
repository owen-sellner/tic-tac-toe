import { motion } from 'framer-motion';

function XSvg({ size }) {
    return (
        <svg width={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ ease: "easeIn", duration: 0.25 }}
                d={"M 10,10 L 90,90"}
                stroke={"#393E41"}
                strokeWidth={20}
            />
            <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
                d={"M 90,10 L 10,90"}
                stroke={"#393E41"}
                strokeWidth={20}
            />
        </svg>
    );
}

export default XSvg;
