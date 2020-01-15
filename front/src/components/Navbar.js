import React from 'react'

// Assets
import Logo from "../images/logo.svg";

const Menu = ({items}) => {
    return(
        <ul className={"nav__menu"}>
            {
                items.map((data, index) => {
                    return (
                        <MenuItem key={index} data={data}/>
                    );
                })
            }
        </ul>
    );
}

const MenuItem = ({data}) => {
    return (
        <li className={"menu__item"}>
            <a href={data.url} className={"menu__item--a"}>
                <p className={"menu__item--text"}>{data.name}</p>
            </a>
        </li>
    );
}

const Navbar = ({items}) => {
   return(
       <nav className={"nav"}>
           <a href={"/"} className={"nav--logo-a"}><img className={"nav--logo"} src={Logo} alt={"Website logo"}/></a>
           <Menu items={items}/>
        </nav>
   );
}

export default Navbar;