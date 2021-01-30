import { githubUrl } from "@links/index";
import { linkedinUrl } from "@links/index";
import { instagramUrl } from "@links/index";
import { twitterUrl } from "@links/index";
import React from "react";
import {
    RiGithubFill,
    RiInstagramFill,
    RiLinkedinBoxFill,
    RiTwitterFill,
} from "react-icons/ri";

const Social = () => {
    return (
        <>
            <a
                className="hover:text-feli transition-colors mr-2"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
            >
                <RiInstagramFill size={36} />
            </a>
            <a
                className="hover:text-feli transition-colors mx-2"
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
            >
                <RiLinkedinBoxFill size={36} />{" "}
            </a>
            <a
                className="hover:text-feli transition-colors mx-2"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
            >
                <RiGithubFill size={36} />{" "}
            </a>
            <a
                className="hover:text-feli transition-colors mx-2"
                href={twitterUrl}
                target="_blank"
                rel="noreferrer"
            >
                <RiTwitterFill size={36} />{" "}
            </a>
        </>
    );
};

export default Social;
