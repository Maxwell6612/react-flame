import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom'

const App = () => {
  
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div class='app-wrapper-content'>
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/dialogs' component={Dialogs} />
      </div>
  </div>
  </BrowserRouter>
  );
}

export default App;