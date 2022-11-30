import { context } from "../../../lib/context";
import { NextApiRequest, NextApiResponse } from "next";
import toURL from "../../../lib/toURL";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userid = req.headers.userid;
  if (req.method === "POST") {
    const { title } = req.body;

    if (title) {
      const project = await context.prisma.projects.create({
        data: {
          title,
          url_by_title: toURL(title),
          User: {
            connect: {
              id: userid,
            },
          },
        },
      });

      res.status(201).json(project);
    }

    res.status(400).json("Заголовок обязателен");
  }

  res.status(400).json("BAD REQUEST");
}
