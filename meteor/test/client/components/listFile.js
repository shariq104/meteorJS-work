import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { itemList } from '../../imports/collections/list';
import ItemDetail from './itemDetail';

const ListOfItems = (props) => {
    // debugger;
    console.log(props.list);
    return (
        <div>

            <table id="fullTable">
                <thead>
                <tr>
                    <th>Field 1</th>
                    <th>Field 2</th>
                    <th>Field 3</th>
                    <th>Field 4</th>
                    <th>Field 5</th>
                    <th>Field 6</th>
                    <th>Field 7</th>
                    <th>Field 8</th>
                    <th>Field 9</th>
                    <th>Field 10</th>
                    <th>ActiveIndicator</th>
                    <th>EffectiveDate</th>
                    <th>ExpiryDate</th>
                </tr>
                </thead>
            
                <tbody>
                    {props.list.map(item=>
                    <ItemDetail key = {item._id} item ={item}/>)}
                    </tbody>

            </table>
        </div>
    );
};

export default withTracker(() => {
    // set up subscription
    Meteor.subscribe('list');

    // return object -> will be sent as props
    return { list: itemList.find({}).fetch() };
}) (ListOfItems);