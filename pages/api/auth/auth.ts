import { verify } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const userCookie = req.cookies.user;

    if (userCookie) {
      const token = verify(userCookie, process.env.KEY);

      if (token) {
        res.status(200).json({
          id: token.id,
        });
      }

      res.status(401).json("Пользователь не авторизован");
    }

    res.status(401).json("Пользователь не авторизован");
  }
}
