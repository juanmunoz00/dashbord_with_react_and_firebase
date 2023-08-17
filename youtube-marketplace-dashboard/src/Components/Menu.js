import React, { useEffect } from 'react'
import "./Menu.css";
import Logo from "../img/logo.png";
import { FaDelicious, 
    FaShoppingCart, 
    FaWallet, 
    FaChartLine, 
    FaRegClock, 
    FaCog, 
    FaSignOutAlt } from "react-icons/fa";

function Menu() {

    /**
     * Click and leave it highlighted effect.
     * This is done through a hook to connect elements to an event listener.
     * This event loops through all the list elements (1), removes the active attribute (2)
     * and sets it to the element clicked (3).
     */
    useEffect(() => {
        /** List of elements in the menu*/
        const mainMenuLi = document
            .getElementById("mainMenu")
            .querySelectorAll("li");

        function changeActive() {
            mainMenuLi.forEach((n) => n.classList.remove("active")); // (2)
            this.classList.add("active"); // (3)
        }

        mainMenuLi.forEach((n) => n.addEventListener("click", changeActive)); // (1)

    }, []);

  return (
    <menu>
        <img src={Logo} alt="logo" />

        <ul id="mainMenu">
            <Icon icon={ <FaDelicious /> }/>
            <Icon icon={ <FaShoppingCart /> }/>
            <Icon icon={ <FaWallet /> }/>
            <Icon icon={ <FaChartLine /> }/>
            <Icon icon={ <FaRegClock /> }/>
        </ul>

        <ul className="lastMenu">
            <Icon icon={ <FaCog /> }/>
            <Icon icon={ <FaSignOutAlt /> }/>
        </ul>

        </menu>
  );
}

/* Child component */ 
const Icon = ({ icon }) => (
    <li>
        <a href="#">{icon}</a>
    </li>
)


export default Menu
