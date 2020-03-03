import _ from 'lodash';
import { random } from 'faker';

import { Meteor } from 'meteor/meteor';
import {itemList} from '../imports/collections/list';

Meteor.startup(() => {

  itemList.rawCollection().drop();

  //check to see if data exists in db
  const numberRecords = itemList.find({}).count();
  // console.log(numberRecords);
  if (numberRecords ==0) {
    //generate data
    itemList.rawCollection().drop();

    var date = new Date();

    _.times(10000, () => {
      var Field1 = random.number();
      var Field2 = random.number();
      var Field3 = random.number();
      var Field4 = random.number();
      var Field5 = random.number();
      var Field6 = random.number();
      var Field7 = random.number();
      var Field8 = random.number();
      var Field9 = random.number();
      var Field10 = random.number();
      var ActiveIndicator = 'Y';
      var EffectiveDate = date;
      var ExpiryDate = null;

      itemList.insert({
        Field1: Field1,
        Field2: Field2,
        Field3: Field3,
        Field4: Field4,
        Field5: Field5,
        Field6: Field6,
        Field7: Field7,
        Field8: Field8,
        Field9: Field9,
        Field10: Field10,
        ActiveIndicator: ActiveIndicator,
        EffectiveDate: EffectiveDate,
        ExpiryDate: ExpiryDate
      })
    });

  };


  Meteor.publish('list', function(per_page){
    return itemList.find({}, {limit: per_page});
  });

  Meteor.publish('count', function(){
    return itemList.find({});
  });

});
