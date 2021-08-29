import React from 'react'
// import { Menu } from 'antd'; 
import { Link} from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/context";


const Header = () => {
    const { openSideBar } = useGlobalContext();
    return (
        <header className="container">
            <nav className="nav">
                <h1 className="logo"> <Link to="/"> LESSEE</Link></h1>
           <div className="nav__right">
            <Link to="/" > Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects" > Projects</Link>
            <Link to="/pricing" >  Pricing</Link>
            <Link to="/contact"
            >  Contact </Link>
          </div>

            <div className="nav__bars">
            <FaBars
              onClick={openSideBar}
              style={{ fontSize: "1.8rem", cursor: "pointer" }}
            />
          </div>
            </nav>
            
        </header>
    )
}

export default Header
