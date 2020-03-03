import React from 'react';
import ReactDOM from 'react-dom';

import ListOfItems from './components/listFile';
import Counters from './components/counters';

const App = () =>{
  return (
    <div>
     <ListOfItems />
    </div>
  );
};
const Counts = () =>{
  return (
    <div>
     <Counters />
    </div>
  );
};


Meteor.startup(()=> {
  ReactDOM.render(<App />, document.querySelector('.container'));
  ReactDOM.render(<Counts />, document.querySelector('.counters'));
});
