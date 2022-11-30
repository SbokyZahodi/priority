import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const {title} = req.body

    if (title) {
        
    }


    res.status(400).json('Заголовок обязателен')

  }
}
