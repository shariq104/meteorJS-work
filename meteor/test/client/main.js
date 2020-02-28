import React from 'react';
import ReactDOM from 'react-dom';

import ListOfItems from './components/listFile';

const App = () =>{
  return (
    <div>
     <ListOfItems />
    </div>
  );
};


Meteor.startup(()=> {
  // debugger;
  ReactDOM.render(<App />, document.querySelector('.container'))
});
