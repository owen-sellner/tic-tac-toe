import { motion } from 'framer-motion';

function CircleSvg({ size }) {
    return (
        <svg width={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <motion.circle
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1.1 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
                r="37"
                cx="50"
                cy="50"
                fill="none"
                stroke={"#FFEED6"}
                strokeWidth={20}
            />
        </svg>
    );
}

export default CircleSvg;
