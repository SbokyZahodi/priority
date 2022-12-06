import { NextApiRequest, NextApiResponse } from "next";
import toURL from "../../../lib/toURL";
import { context } from "./../../../lib/context";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PATCH") {
    const { title, id } = req.body;

    try {
      await context.prisma.projects.update({
        data: {
          title,
          url_by_title: toURL(title),
        },

        where: {
          id,
        },
      });
      res.status(200).json("Project updated");
    } catch (error) {
      res.status(400).json("Bad Request");
    }
  }

  res.status(200).json("Response");
}
