import { NextApiRequest, NextApiResponse } from "next";
import toURL from "../../../lib/toURL";
import { context } from "./../../../lib/context";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { url_by_title, todo, priority } = req.body;

    const newTask = await context.prisma.task.create({
      data: {
        todo,
        priority: Number(priority),

        projects: {
          connect: {
            url_by_title: toURL(url_by_title),
          },
        },
      },
    });

    if (!url_by_title || !todo || !priority) {
      res.status(400).json("Не все данные предоставлены");
    }

    res.status(200).json(newTask);
  }
}
