import { githubUrl, linkedinUrl, instagramUrl, twitterUrl } from "@links/index";
import { motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";
import {
    RiGithubFill,
    RiInstagramFill,
    RiLinkedinBoxFill,
    RiTwitterFill,
} from "react-icons/ri";

const Social = () => {
    return (
        <>
            <LinkedIcon
                url={instagramUrl}
                Icon={RiInstagramFill}
                className="mr-2"
            />
            <LinkedIcon url={linkedinUrl} Icon={RiLinkedinBoxFill} />
            <LinkedIcon url={githubUrl} Icon={RiGithubFill} />
            <LinkedIcon url={twitterUrl} Icon={RiTwitterFill} />
        </>
    );
};

interface LinkedIconProps {
    url: string;
    Icon: IconType;
    className?: string;
}

const iconVariants = {
    animate: {
        opacity: 1,
    },
    tap: {
        scale: 0.9,
    },
    hover: {
        scale: 1.1,
    },
};

const LinkedIcon = ({ url, Icon, className = "mx-2" }: LinkedIconProps) => {
    return (
        <motion.a
            className={`hover:text-feli transition-colors ${className}`}
            href={url}
            target="_blank"
            rel="noreferrer"
            variants={iconVariants}
            initial={false}
            animate="animate"
            whileTap="tap"
            whileHover="hover"
        >
            <Icon size={36} />
        </motion.a>
    );
};

export default Social;
