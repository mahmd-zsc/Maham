import React from "react";
import addImg from "../images/icons/add.png";
function AddImportantTask() {
  return (
    <div>
      <form
        className="flex-1 flex bg-gray-100 items-center px-2 rounded-md "
        action="#"
      >
        <img className="w-5 h-5 opacity-40" src={addImg} alt="" />
        <input
          placeholder="add your task"
          className="bg-gray-100 w-full outline-none px-2 py-5 placeholder:capitalize focus:placeholder:text-gray-300"
          type="text"
        />
      </form>
    </div>
  );
}

export default AddImportantTask;
