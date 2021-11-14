import { Avatar, Button, Col, Layout, Menu, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUserLogin, selectIsAuth } from "../../redux/auth-selectors";
import { logout } from "../../redux/auth-reducer";

export type MapPropstype = {
}

export const Header: React.FC<MapPropstype> = (props) => {

  const isAuth = useSelector(selectIsAuth)
  const login = useSelector(selectCurrentUserLogin)
  const dispatch = useDispatch()

  const logoutCallback = () => {
    dispatch(logout())
  }

  const { Header } = Layout;
  
  return <Header className="header">
  <Row>
      <Col span={18}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1"><Link to="/developers">Developers</Link></Menu.Item>
          </Menu>
      </Col>

      {isAuth
          ?<> <Col span={1}>
              <Avatar alt={login || ''} style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
          </Col>
              <Col span={5}>
                  <Button onClick={logoutCallback}>Log out</Button>
              </Col>
          </>
          : <Col span={6}>
              <Button>
                  <Link to={'/login'}>Login</Link>
              </Button>
          </Col>}

  </Row>
        </Header>
          
    // <header className={s.header}>
    //   {/* <img
    //     src="https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg"
    //     alt=""
    //   /> */}
    //   <a href="https://www.freepnglogos.com/pics/company-logo-ideas" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/company-logo-png/raise-company-logo-digital-product-demo-9.png" alt="Raise company logo, digital product demo" /></a>

    //   <div className={s.loginBlock}>
    //     {props.isAuth 
    //       ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div>
    //       : <NavLink to={"/login"}>Login</NavLink>}
    //   </div>
    // </header>
};
