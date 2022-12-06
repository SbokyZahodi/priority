import { context } from "./../../../lib/context";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const { id } = req.body;

    await context.prisma.projects.delete({
      where: {
        id,
      },
    });

    res.status(200).json("Project deleted");
  }

  res.status(400).json("Bad Request");
}
