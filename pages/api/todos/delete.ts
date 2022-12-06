import { context } from "../../../lib/context";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const { id } = req.body;
    console.log(id);

    await context.prisma.task.delete({
      where: {
        id,
      },
    });

    res.status(200).json("Task deleted");
  }

  res.status(400).json("Bad Request");
}
