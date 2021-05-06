import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { id: 1, name: 'Dallas' },
  { id: 2, name: 'Jack' },
  { id: 3, name: 'Joseph' },
  { id: 4, name: 'Eva' },
  { id: 5, name: 'Siberia' },
  { id: 6, name: 'Tokio' },
]
let messages = [
      { id: 1, message: 'Tokio is calling Berlin' },
      { id: 2, message: 'Tokio is calling Dock' },
      { id: 3, message: 'Tokio is calling Albania' },
      { id: 4, message: 'Eva' },
      { id: 5, message: 'Siberia' },
      { id: 6, message: 'Tokio' },
  ]

let posts = [
  { id: 1, message: 'hi, how are you?', likesCount: 12 },
  { id: 2, message: 'this is a post?', likesCount: 23 },
  { id: 3, message: 'viva latina?', likesCount: 3 },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
