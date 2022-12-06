import { NextApiRequest, NextApiResponse } from "next";
import toURL from "../../../lib/toURL";
import { context } from "./../../../lib/context";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { branchId, todo, priority } = req.body;

    const newTask = await context.prisma.task.create({
      data: {
        todo,
        priority: Number(priority),
        branch: {
          connect: {
            id: branchId,
          },
        },
      },
    });

    if (!branchId || !todo || !priority) {
      res.status(400).json("Не все данные предоставлены");
    }

    res.status(200).json(newTask);
  }
}
