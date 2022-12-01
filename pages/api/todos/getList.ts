import { context } from "./../../../lib/context";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { projectId } = req.body;

    if (projectId) {
      const tasks = await context.prisma.projects.findUnique({
        where: {
          id: projectId,
        },
        include: {
          tasks: true,
        },
      });

      if (tasks) {
        res.status(200).json(tasks);
      }
    }
  }
}
