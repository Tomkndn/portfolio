"use client"
import React from 'react'
import Nav from './ui/Navbar-ui'

function Navbar() {
    const menuItem:string[] = [
      "Home",
      "About",
      "Skills",
      "Projects",
      "Achievements",
      "Contact",
    ];
    return <Nav menuItems={menuItem} />;
}

export default Navbar
