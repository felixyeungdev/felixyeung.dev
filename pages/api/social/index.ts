import type { NextApiRequest, NextApiResponse } from "next";
import {
    instagramUrl as instagram,
    linkedInUrl as linkedIn,
    gitHubUrl as gitHub,
    twitterUrl as twitter,
} from "@/links/index";

export default (_req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({
        instagram,
        linkedIn,
        gitHub,
        twitter,
        email: "hi@felixyeung.dev",
    });
};
