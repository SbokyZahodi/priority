import { NextApiRequest, NextApiResponse } from "next";
import { context } from "../../../lib/context";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const userid = req.headers.userid;

    const projects = await context.prisma.user.findUnique({
      where: {
        id: +userid,
      },

      select: {
        projects: {
          select: {
            id: true,
            title: true,
            Branch: true,
          },
        },
      },
    });

    if (projects) {
      return res.status(200).json(projects);
    }
  }

  res.status(200).json("Response");
}
