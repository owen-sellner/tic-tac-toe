import { motion } from 'framer-motion';

function Modal({ winner }) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, ease: "anticipate", duration: 2 }} className="flex flex-col w-[100%] min-h-screen justify-center bg-keppel fixed">
            <div className="flex justify-center">
                {winner !== 2 &&
                    <svg width="16vw" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d={"M 10,10 L 90,90"} stroke={"#393E41"} strokeWidth={20} />
                        <path d={"M 90,10 L 10,90"} stroke={"#393E41"} strokeWidth={20} />
                    </svg>
                }
                {winner !== 1 &&
                    <svg width="16vw" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle r="37" cx="50" cy="50" fill="none" stroke={"#FFEED6"} strokeWidth={20} />
                    </svg>
                }
            </div>
            <h1 className={`text-[5vw] mt-10 text-center uppercase font-bold text-onyx`}>{winner == 0 ? "draw" : "winner"}!</h1>
        </motion.div>
    );
};

export default Modal;