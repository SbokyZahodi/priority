import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { authAPI } from "../API/auth/auth";

export const userAuthorizedProtect = (Component: any) => {
  const Protected = () => {
    const router = useRouter();
    const [isUserAuthorized, setisUserAuthorized] = useState(false);

    useEffect(() => {
      const isUserAuthorized = async () => {
        return await authAPI.auth().then(() => {
          setisUserAuthorized(true);
          router.push("/");
        });
      };

      isUserAuthorized();
    }, []);

    if (!isUserAuthorized) {
      return <Component />;
    }
    return null;
  };

  return Protected;
};
