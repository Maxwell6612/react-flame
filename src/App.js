import React from 'react';
import './App.css';
// import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route exact path='/dialogs' render={() => <DialogsContainer store={props.store}/>} />
        <Route exact path='/profile' render={() => <Profile store={props.store}/>} />
      </div>
  </div>
  </BrowserRouter>
  );
}

export default App;