import { projects } from "@/data/projects";
import { Projects } from "@/interfaces/index";
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse<Projects>) => {
    res.status(200).json(projects);
};
