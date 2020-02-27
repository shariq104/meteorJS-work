import React from 'react';
import ReactDOM from 'react-dom';
import itemList from './components/list';

import './main.html';


const App = () =>{
  return (
    <div>
     <ItemList />
    </div>
  );
};

Meteor.startup(()=> {
  ReactDOM.render(<App/>, document.querySelector('.container'))

});
