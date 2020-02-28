import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { itemList } from '../../imports/collections/list'

const ListOfItems = (props) => {
    // debugger;
    console.log(props.list);
    return (
        <div>
            <div className="itemslist">
                Items List
            </div>
        </div>
    );
};

export default withTracker(() => {
    // set up subscription
    Meteor.subscribe('list');

    // return object -> will be sent as props
    debugger;
    return { list: itemList.find({}).fetch() };
}) (ListOfItems);