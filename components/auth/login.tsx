import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { authAPI } from "../../API/auth/auth";

interface props {}

const Login: FC<props> = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const userData = {
    username,
    password,
  };

  const login = useMutation({
    mutationFn: () => authAPI.login(userData),
    onSuccess: () => {
      router.push("/");
    },
    onError: () => {
      console.log("Error");
    },
  });

  return (
    <div className={`w-screen h-screen flex items-center justify-center`}>
      <div className="bg-zinc-700 rounded-md shadow-xl w-[400px] h-[500px] p-5">
        <div className="flex justify-center text-3xl">Login</div>
        <div>
          <div className="m-2 text-xl">Username</div>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="input bg-zinc-500 w-full rounded-md text-lg shadow-md  "
          />
        </div>
        <div>
          <div className="m-2 text-xl">Password</div>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            className="input bg-zinc-500 w-full  rounded-md text-lg shadow-md "
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            className={`m-10 btn text-xl btn-wide  text-white hover:bg-zinc-400 shadow-md btn-outline ${
              login.isLoading && "loading"
            } `}
            onClick={() => login.mutate()}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
