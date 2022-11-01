import type { NextApiRequest, NextApiResponse } from "next";

import { postDetailQuery } from "../../../utils/queries";
import { client } from "../../../utils/client";
import { uuid } from "uuidv4";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const { id } = req.query;
      const query = postDetailQuery(id);
      const data = await client.fetch(query);
      res.status(200).json(data[0]);
      break;

    case "PUT":
    //   const { comment, userId } = req.body;
    //   const { id }: any = req.query;
    //   const data = await client
    //     .patch(id)
    //     .setIfMissing({ comments: [] })
    //     .insert("after", "comments[-1]", [
    //       {
    //         comment,
    //         _key: uuid(),
    //         postedBy: { _type: "postedBy", _ref: userId },
    //       },
    //     ])
    //     .commit();

    //   res.status(200).json(data);
      break;

    default:
      console.log("quit");
      break;
  }
}
