import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import search from "../images/icons/search.png";
function Search() {
  
  return (
    <form className="flex items-center gap-2  bg-gray-100 py-2 px-2 rounded-md flex-1" action="">
      <img className="w-5 opacity-40" src={search} alt="" />
      <input
        type="text"
        className=" placeholder:text-black outline-none flex-1 bg-gray-100 "
        placeholder="Search"
      />
    </form>
  );
}

export default Search;
