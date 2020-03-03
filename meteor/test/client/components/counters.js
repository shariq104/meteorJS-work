import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { itemList } from '../../imports/collections/list';

const PER_PAGE = 10000;
const Counters = (props) => {
    console.log(props);
    return (
        <div>
            <div id="chartContainer" ></div>
            
            <input type="number" id="ycount" value={props.ycount}></input>
            <input type="number" id="ncount" value={props.ncount}></input>
        </div>
    );
};


export default withTracker(() => {
    // set up subscription
    Meteor.subscribe('list' ,PER_PAGE);
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
    return { ycount: ycount,
             ncount: ncount };
}) (Counters);