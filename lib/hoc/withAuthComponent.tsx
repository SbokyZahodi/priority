import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { authAPI } from "../../API/auth/auth";
import Preloader from "../../components/helpers/preloader";

type props = {
  children: any;
};

const WithAuth: FC<props> = ({ children }) => {
  const router = useRouter();
  const [isUserAuth, setisUserAuth] = useState(false);

  useEffect(() => {
    const checkIsUserAuth = async () => {
      return await authAPI
        .auth()
        .then(() => setisUserAuth(true))
        .catch(() => router.push("/login"));
    };

    checkIsUserAuth();
  }, []);

  if (!isUserAuth) {
    return (
      <Preloader className="w-screen h-screen flex justify-center items-center" />
    );
  }

  return <>{children}</>;
};

export default WithAuth;
