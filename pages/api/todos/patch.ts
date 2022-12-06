import { NextApiRequest, NextApiResponse } from "next";
import { context } from "./../../../lib/context";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PATCH") {
    const { completed, priority, todo, id } = req.body;

    const updatedTask = await context.prisma.task.update({
      data: {
        completed,
        priority,
        todo,
      },
      where: {
        id,
      },
    });

    if (updatedTask) {
      res.status(200).json(updatedTask);
    }

    res.status(400).json("Bad Request");
  }
}
