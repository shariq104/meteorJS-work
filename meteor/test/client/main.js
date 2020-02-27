import React from 'react';
import ReactDOM from 'react-dom';

import './main.html';


const App = () =>{
  return (
    <div>
      React App #2
    </div>
  );
};

Meteor.startup(()=> {
  ReactDOM.render(<App/>, document.querySelector('.container'))

});