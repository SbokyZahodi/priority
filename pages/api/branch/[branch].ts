import { context } from "../../../lib/context";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { branch } = req.query;

    // if (branches) {
    //   res.status(200).json(branches);
    // }

    res.status(404).json("Ветки не найдены");
  }

  res.status(200).json("Response");
}
