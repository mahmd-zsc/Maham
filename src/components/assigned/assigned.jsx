import React, { useEffect } from "react";
import img from "../images/assigned.png";
function Assigned() {
  useEffect(() => {
    document.title = "maham - Assigned";
  }, []);
  return (
    <div
      style={{ userSelect: "none" }}
      className="flex justify-center flex-1  flex-col items-center gap-10"
    >
      <img className="w-1/4  opacity-30" src={img} alt="img" />
      <p className="w-full text-2xl text-center text-gray-400">
        The tasks assigned to you are shown here
      </p>
    </div>
  );
}

export default Assigned;
