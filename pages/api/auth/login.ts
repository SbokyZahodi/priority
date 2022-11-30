import { compareSync } from "bcrypt";
import { setCookie } from "cookies-next";
import { sign } from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";
import { context } from "../../../lib/context";

const generateToken = (id: number) => {
  const payload = {
    id,
  };

  return sign(payload, process.env.KEY, {
    expiresIn: "24h",
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    const user = await context.prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      return res.status(404).json("Пользователь не найден");
    }
    const isPasswordCorrent = compareSync(password, user.password);

    if (!isPasswordCorrent) {
      res.status(400).json("Неверный пароль");
    }

    const token = generateToken(user.id);

    setCookie("user", token, { req, res, maxAge: 60 * 60 * 24 });

    res.status(200).json({
      id: user.id,
      token,
    });
  }
}
