import { hashSync } from "bcrypt";
import type { NextApiRequest, NextApiResponse } from "next";
import { context } from "../../../lib/context";

interface createUserDTO {
  login: string;
  password: string;
}

export default async function createUser(
  req: NextApiRequest,
  res: NextApiResponse<createUserDTO>
) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const hashedPassword = hashSync(password, 7);

    const foundedUser = await context.prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (foundedUser) {
      res.status(400).json("Такой пользователь уже есть");
    }

    const createdUser = await context.prisma.user.create({
      data: {
        password: hashedPassword,
        username,
      },
      select: {
        id: true,
        username: true,
      },
    });

    res.status(201).json(createdUser);
  } else {
    res.status(400).json("Bad Request");
  }
}
