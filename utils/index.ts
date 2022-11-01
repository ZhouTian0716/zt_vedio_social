import axios from "axios";
import jwt_decode from "jwt-decode";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const BASE_URL = 'http://localhost:3000';

export const createOrGetUser = async (response: any) => {
  const decoded: { name: string; picture: string; sub: string } = jwt_decode(
    response.credential
  );
  const { name, picture, sub } = decoded;
  const user = {
    _id: sub,
    _type: "user",
    userName: name,
    image: picture,
  };
  // console.log(user);
  await axios.post(`${BASE_URL}/api/auth`, user);
};
 