import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { itemList } from '../../imports/collections/list';

const Counters = (props) => {
    // console.log(props);
    return (
        <div>
            <div className="itemslist">
            </div>
        </div>
    );
};


export default withTracker(() => {
    // set up subscription
    Meteor.subscribe('list');
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