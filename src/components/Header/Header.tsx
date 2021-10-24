import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

export type MapPropstype = {
  isAuth: boolean
  login: string | null
}

export type DispatchPropsType = {
  logout: () => void
}

const Header: React.FC<MapPropstype & DispatchPropsType> = (props) => {
  return <header className={s.header}>
      {/* <img
        src="https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg"
        alt=""
      /> */}
      <a href="https://www.freepnglogos.com/pics/company-logo-ideas" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/company-logo-png/raise-company-logo-digital-product-demo-9.png" alt="Raise company logo, digital product demo" /></a>

      <div className={s.loginBlock}>
        {props.isAuth 
          ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div>
          : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
};

export default Header;
