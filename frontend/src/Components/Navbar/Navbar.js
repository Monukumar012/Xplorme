import React, { useContext, useState } from "react";
import "./NavbarStyle.css";
import { NavbarItems } from "./NavbarItems";
import { ThemeContext } from "../../Context/ThemeContext";
import { Link } from "react-router-dom";
// import {Link} from 'react-router-dom'

const Navbar = ({ setDark, userAuth, setUserAuth }) => {

  if (userAuth) {
    NavbarItems.splice(-3);
    NavbarItems.push(
        {
            title: 'Dashboard',
            url: '/dashboard'
        },
    );
  }

  const dark = useContext(ThemeContext);
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <nav className={`navbar-main ${dark && 'nav-dark'}`}>
      <div className="navbar-top">
        <h2 className={`${state && 'h2-active'} ${dark && 'text-dark-green'}`}>monu.code</h2>
      </div>

      <div className={`navbar-burgir ${state && 'h2-active'} ${!state && dark && 'burgir-black'}`}>
        <i
          className={state ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          onClick={handleClick}
        ></i>
      </div>


      <div className={`navbar-bottom ${state && 'active'}`}>
        <ul className={`navbar-menu`}>
          {NavbarItems.map((items, ind) => {
            return (
              <li key={ind}>
                <Link className={`${dark && 'text-dark-green'}`} to={items.url}>{items.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className="navbar-dark"><i onClick={() => setDark(!dark)} className={dark ? "fa-solid fa-moon" : "fa-regular fa-moon"}></i></div>
      </div>
    </nav>
  );
};

export default Navbar;
