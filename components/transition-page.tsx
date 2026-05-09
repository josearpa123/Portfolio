"use client"

import { transitionVariantsPage } from "@/utils/motion-transitions";
import { AnimatePresence, motion } from "framer-motion";

const TransitionPage = () => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                className="fixed top-0 bottom-0 left-0 z-30 w-screen h-screen bg-secondary"
                variants={transitionVariantsPage}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.1, duration: 0.6, ease: "easeInOut" }}
            />
        </AnimatePresence>
    );
}

export default TransitionPage;
