import React from "react";
import { MdOutlinePassword } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdHideSource } from "react-icons/md";

const Manager = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <main className="flex flex-col items-center justify-start mt-8 gap-2 min-h-[100vh]">
        <div className="text flex items-center justify-center gap-3 flex-col">
          <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
            <span className="text-green-500 flex gap-2 items-center justify-center">
              {" "}
              <MdOutlinePassword />
              Pass{" "}
            </span>{" "}
            OP
          </h1>
          <p className="text-slate-600 mb-5">Your own Password Manager</p>
        </div>
        <form className="flex items-center justify-center flex-col gap-4 w-[40rem]">
          <input
            placeholder="Website URL"
            type="text"
            className="border text-slate-600 border-gray-400 outline-none rounded-full px-3 py-1 w-full"
          />

          <input
            placeholder="Username"
            type="text"
            className="border text-slate-600 w-full border-gray-400 outline-none rounded-full px-3 py-1"
          />
          <div className="w-full">
            <input
              placeholder="Password"
              type="password"
              className="border text-slate-600 w-full border-gray-400 outline-none rounded-full px-3 py-1"
            />
          </div>

          <button className="bg-green-500 text-black border border-green-500 text-md flex gap-2     items-center justify-center py-1 px-3 rounded-full hover:bg-transparent hover:text-green-500 transition duration-300">
            {" "}
            Add Password
            <MdAdd />
          </button>
        </form>
      </main>
    </>
  );
};

export default Manager;
