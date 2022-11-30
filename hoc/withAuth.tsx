import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { authAPI } from "../API/auth/auth";

export const withAuth = (Component: any) => {
  const AuthComponent = () => {
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
      return null;
    }

    return <Component />;
  };

  return AuthComponent;
};
