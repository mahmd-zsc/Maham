import React, { useEffect } from "react";
import Search from "./search";
import Notification from "./notification";
import Mode from "./mode";
import User from "./user";
function Header() {
  return (
    <div className="header ml-4 sm:ml-0 relative pt-5 flex  gap-2 items-center   justify-between   ">
      <Search />
      <div className="flex items-center gap-4">
        <Notification />
        <Mode />
        <User />
      </div>
    </div>
  );
}

export default Header;
