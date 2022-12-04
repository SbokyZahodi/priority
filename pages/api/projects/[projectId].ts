import { context } from "./../../../lib/context";
import { NextApiRequest, NextApiResponse } from "next";
import toURL from "../../../lib/toURL";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { projectId } = req.query;

    console.log(projectId)

    const todos = await context.prisma.projects.findUnique({
      where: {
        url_by_title: toURL(projectId),
      },
      select: {
        tasks: true,
      },
    });

    if (todos) {
      res.status(200).json(todos);
    }

    res.status(404).json("Проект не найден");
  }
}
