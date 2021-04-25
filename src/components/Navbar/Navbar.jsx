import React from 'react'
import s from './Navbar.module.css'

// let s = {
//   'nav': 'Navbar_nav__3VT01',
//   'item': 'Navbar_item__1Raqz'
// }

const Navbar = () => {
    return <nav className={s.nav}>
    <div className={s.item}>Profile</div>
    <div className={s.item}>Messages</div>
    <div className={s.item}>News</div>
    <div className={s.item}>Music</div>
    <div className={s.item}>Settings</div>
  </nav>
}

export default Navbar;