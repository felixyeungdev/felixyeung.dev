import { technologies } from "@/data/technologies";
import { Technologies } from "@/interfaces/index";
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse<Technologies>) => {
    res.status(200).json(technologies);
};
