import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter, Switch, Redirect} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer.jsx';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from "react-redux";
import {compose} from "redux"
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from "./redux/redux-store";
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert("Some error occurred");
    //console.error(promiseRejectionEvent);
}
componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
}
componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
}

  render () {  
    if (!this.props.initialized){
        return <Preloader/>
    }

    return (
    <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
          <div className='app-wrapper-content'>
          <Switch>
              <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
              <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
              <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/login' render={() => <Login />} />
              <Route path='*' render={() => <div>404 not found</div>} />
          </Switch>
          </div>
  </div>
  );}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
}) 

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

const JSApp = (props) => {
 return <BrowserRouter >
      <Provider store={store}>
          <AppContainer />
      </Provider>
  </BrowserRouter>
}

export default JSApp;