import type { NextApiRequest, NextApiResponse } from "next";

// import { allUsersQuery } from './../../utils/queries';
import { client } from "../../utils/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const user = req.body;
      await client.createIfNotExists(user);
      res.status(200).json("Login successful");
      break;
    case "GET":
      console.log("request method GET");
      break;
    default:
      console.log("quit");
      break;
  }
}
