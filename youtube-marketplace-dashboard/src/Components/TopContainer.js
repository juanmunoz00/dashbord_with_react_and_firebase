import React from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";

function TopContainer() {
  return (
    <div className="topContainer">
        <div className="inputBox">
            <i> <BiSearchAlt /> </i>
            <input type="text" placeholder="Search item, collections" />            
        </div>
      
        <div className="profileContainer">
            <i className="profileIcon">
              <FaBell />  
            </i>

            <div className="profileImage">
            </div>

            <p className="profileName">Olivia Christine</p>
            <i className="menuChevron" id='menuChevron'><FaChevronDown /></i>

        </div>
    </div>
  );
}

export default TopContainer
