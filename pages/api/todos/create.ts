import { NextApiRequest, NextApiResponse } from "next";
import { context } from "./../../../lib/context";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { id, todo } = req.body;

    if (!id || !todo) {
      res.status(400).json("Не все данные предоставлены");
    }

    // res.status(200).json(newTask);
  }
}
Щ;
