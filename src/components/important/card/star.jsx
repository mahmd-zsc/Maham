import React from "react";
import star from "./icons/star.png";
import starFull from "./icons/star-full.png";
function Star({ task, handleStart }) {
  return (
    <>
      {task.important && (
        <img
          onClick={handleStart}
          className="w-4 h-4 cursor-pointer"
          src={starFull}
          alt="starFull"
        />
      )}
      {!task.important && (
        <img
          onClick={handleStart}
          className="w-4 h-4 cursor-pointer"
          src={star}
          alt="starFull"
        />
      )}
    </>
  );
}

export default Star;
