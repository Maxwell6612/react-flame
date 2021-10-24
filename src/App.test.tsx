import React from "react";
import ReactDOM from 'react-dom';
import JSApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});