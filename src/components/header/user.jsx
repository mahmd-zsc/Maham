import React, { useRef } from "react";
import user from "../images/icons/user.png";

function User() {
  let not = useRef();
  let img = useRef();
  return (
    <div>
      <img className="w-10 cursor-pointer" src={user} alt="" />
    </div>
  );
}

export default User;
