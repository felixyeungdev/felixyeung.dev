import Social from "@components/Social";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.div
            className="h-72 bg-black flex flex-col items-center justify-center text-white"
            layoutId="footer"
        >
            <h1 className="text-6xl my-2 font-bold">Contact</h1>
            <h2 className="text-3xl my-1 font-bold">Get in touch!</h2>
            <a
                className="text-feli my-1"
                target="_blank"
                href="mailto:hi@felixyeung.dev"
                rel="noreferrer"
            >
                hi@felixyeung.dev
            </a>
            <div className="flex my-1">
                <Social />
            </div>
        </motion.div>
    );
};

export default Footer;
