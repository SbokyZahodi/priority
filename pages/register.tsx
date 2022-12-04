import { NextPage } from "next";
import Register from "../components/auth/register";
import { userAuthorizedProtect } from "../lib/hoc/userAuthorizedProtect";

interface Props {}

const RegisterPage: NextPage<Props> = ({}) => {
  return <Register />;
};

export default userAuthorizedProtect(RegisterPage);
