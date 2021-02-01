import Icon from "@/components/Icon";
import { motion } from "framer-motion";

const Nav = () => {
    return (
        <motion.div
            className="min-h-56 sm:min-h-64 flex items-center shadow-md px-6 bg-black text-white"
            layoutId="navbar"
        >
            <div className="flex items-center justify-center">
                <Icon className="w-6" fixed />
                <div className="text-xl sm:text-2xl font-bold ml-4">
                    Felix Yeung
                </div>
            </div>
        </motion.div>
    );
};

export default Nav;
