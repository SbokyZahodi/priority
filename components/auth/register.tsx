import { FC, useState } from "react";

interface props {}

const Register: FC<props> = ({}) => {
  const [Login, setLogin] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <div className={`w-screen h-screen flex items-center justify-center`}>
      <div className="bg-zinc-700 rounded-md shadow-xl w-[400px] h-[500px] p-5">
        <div className="flex justify-center text-3xl">Register</div>
        <div>
          <div className="m-2 text-xl">Login</div>
          <input
            type="text"
            className="input bg-zinc-500 w-full rounded-md text-lg shadow-md  "
          />
        </div>
        <div>
          <div className="m-2 text-xl">Password</div>
          <input
            type="text"
            className="input bg-zinc-500 w-full  rounded-md text-lg shadow-md "
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="m-10 btn text-xl btn-wide  text-white hover:bg-zinc-400 shadow-md btn-outline">
            register
          </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
