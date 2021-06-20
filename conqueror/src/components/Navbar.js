import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData'
import '../css/Navbar.css'
import { IconContext} from 'react-icons'
import { Link } from 'react-router-dom'
function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars className="social-icon" size={20} onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose size={20}/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index)=>{
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span className='spanky'>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <div class="social-networks">
                        <a href="https://www.instagram.com/conqueror__games/" className="social-icon" target="_blank" rel="noreferrer">
                            <AiIcons.AiFillInstagram  size={40}/>
                        </a>
                        <a href="https://twitter.com/GamesConqueror" className="social-icon" target="_blank" rel="noreferrer">
                            <AiIcons.AiFillFacebook  size={40}/>
                        </a>
                        <a href="https://twitter.com/GamesConqueror" className="social-icon" target="_blank" rel="noreferrer">
                            <AiIcons.AiFillTwitterCircle  size={40}/>
                        </a>
                    </div>
                    

                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
