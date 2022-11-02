import type { NextApiRequest, NextApiResponse } from "next";
import { uuid } from "uuidv4";

// This setup is to work with Sanity
import { client } from "../../utils/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "PUT":
      const { userId, postId, like } = req.body;
      const data = like
        ? await client
            .patch(postId)
            .setIfMissing({ likes: [] })
            .insert("after", "likes[-1]", [
              {
                _key: uuid(),
                _ref: userId,
              },
            ])
            .commit()
        : await client
            .patch(postId)
            .unset([`likes[_ref=="${userId}"]`])
            .commit();

      res.status(200).json(data);
      break;
    case "GET":
      console.log("request method GET");
      break;
    default:
      console.log("quit");
      break;
  }
}
