import { NextPage } from "next";
import Login from "../components/auth/login";
import { userAuthorizedProtect } from "../lib/hoc/userAuthorizedProtect";

interface Props {}

const LoginPage: NextPage<Props> = ({}) => {
  return <Login />;
};

export default userAuthorizedProtect(LoginPage);
