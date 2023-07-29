import React, { useEffect } from "react";
import Search from "./search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Notification from "./notification";
import Language from "./language";
import User from "./user";
function Header() {
  return (
    <div className="header relative py-5 flex flex-1 gap-2 items-center  mb-10 justify-between ">
      <Search />
      <div className="flex items-center gap-4">
        <Notification />
        <Language />
        <User />
      </div>
    </div>
  );
}

export default Header;
