import React from 'react'
import s from './Navbar.module.css'

const Navbar = () => {
    return <nav className={s.nav}>
    <div className={s.item}>
      <a href='/profile'>Profile</a>
    </div>
    <div className={s.item}>
      <a href='/dialogs'>Messages</a>
    </div>
    <div className={s.item}>News</div>
    <div className={s.item}>Music</div>
    <div className={s.item}>Settings</div>
  </nav>
}

export default Navbar;