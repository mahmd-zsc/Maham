import React, { useEffect } from "react";
import black from "./images/assigned-black.png";
import white from "./images/assigned-white.png";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { changePath } from "./redux/setting/action";
function Assigned() {
  useEffect(() => {
    document.title = "maham - Assigned";
  }, []);
  let mode = useSelector((state) => state.mode.mode);
  return (
    <div
      style={{ userSelect: "none" }}
      className="flex justify-center flex-1  flex-col items-center gap-10"
    >
      <img className="w-1/5 opacity-40 " src={mode ? black : white} alt="img" />
      <p className="w-full text-1xl text-center text-gray-400">
        The tasks assigned to you are shown here
      </p>
    </div>
  );
}

export default Assigned;
