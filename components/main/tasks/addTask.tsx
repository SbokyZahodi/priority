import { FC } from "react";

interface props {}

const AddTask: FC<props> = ({}) => {
  return (
    <>
      <div className="flex space-x-2">
        <div
          className={` w-[500px]  bg-zinc-700 outline-none text-xl p-2 rounded-md min-h-[50px]`}
          contentEditable
          suppressContentEditableWarning
        >
          asd
        </div>
        <div>
          <select
            name=""
            id=""
            className="select select-ghost text-xl  hover:bg-zinc-700 bg-zinc-700 focus:bg-zinc-700"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end w-[600px]">
        <button className="btn btn-outline px-10 btn-sm m-2">Add</button>
      </div>
    </>
  );
};
export default AddTask;
