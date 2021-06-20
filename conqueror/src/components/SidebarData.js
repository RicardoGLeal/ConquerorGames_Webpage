import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GameIcons from "react-icons/gi";
import * as CgIcons from "react-icons/cg";
import * as BiIcons from "react-icons/bi";
import * as GrIcons from "react-icons/gr";
import * as RiIcons from "react-icons/ri";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Games',
        path: '/games',
        icon: <CgIcons.CgGames/>,
        cName: 'nav-text'
    },
    {
        title: 'Conqueror Universe',
        path: '/universe',
        icon: <BiIcons.BiWorld/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <RiIcons.RiContactsLine/>,
        cName: 'nav-text'
    },
    {
        title: 'About Us',
        path: '/aboutUs',
        icon: <IoIcons.IoMdContacts/>,
        cName: 'nav-text'
    },
    {
        title: 'Art',
        path: '/art',
        icon: <FaIcons.FaPaintBrush/>,
        cName: 'nav-text'
    },
    {
        title: 'News',
        path: '/news',
        icon: <BiIcons.BiNews/>,
        cName: 'nav-text'
    }
]
