import React from "react";
import Header, { MapPropstype, DispatchPropsType } from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";

class HeaderContainer extends React.Component<MapPropstype & DispatchPropsType> {

  render () {
  return <Header { ...this.props}/>;
  };
};

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  logout: () => {}
});

export default connect<MapPropstype, DispatchPropsType, {}, AppStateType>(mapStateToProps, {logout})(HeaderContainer);
