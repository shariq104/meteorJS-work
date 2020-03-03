import React from 'react';
import ReactDOM from 'react-dom';

import ListOfItems from './components/listFile';
import Counters from './components/counters';
import { itemList } from '../imports/collections/list';




Router.route('list', function(){
  ReactDOM.render(<App />, document.querySelector('.container'));
});
Router.route('analytics', function(){
  ReactDOM.render(<Counts />, document.querySelector('.counters'));


  Meteor.subscribe('list' ,10000);
    // debugger;

    var coun = itemList.find({}).count();
    var list = itemList.find({}).fetch();

    var ycount = 0;
    var ncount = 0;
    

    for(var i=0; i< coun; i++){
        if(list[i].ActiveIndicator == 'Y'){
          ycount++;
        }
  
        if(list[i].ActiveIndicator == 'N'){
          ncount++;
        }
      };

    // return object -> will be sent as props

  
  var chart = new CanvasJS.Chart("chartContainer",
	{
		title:{
			text: "Active Indicator"
		},
		legend: {
			maxWidth: 350,
			itemWidth: 120
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			legendText: "{indexLabel}",
			dataPoints: [
				{ y: ycount, indexLabel: "Y" },
				{ y: ncount, indexLabel: "N" },
				
			]
		}
		]
	});
	chart.render();


});

Router.route('/', function () {
  this.redirect('analytics');
});



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

  

});
