import _ from 'lodash';
import { random } from 'faker';

import { Meteor } from 'meteor/meteor';
import {itemList} from '../imports/collections/list'

Meteor.startup(() => {


  //check to see if data exists in db
  const numberRecords = itemList.find({}).count();
  console.log(numberRecords);
  if (!numberRecords) {
    //generate data

    var date = new Date();

    _.times(10000, () => {
      const Field1 = random.number;
      const Field2 = random.number;
      const Field3 = random.number;
      const Field4 = random.number;
      const Field5 = random.number;
      const Field6 = random.number;
      const Field7 = random.number;
      const Field8 = random.number;
      const Field9 = random.number;
      const Field10 = random.number;
      const ActiveIndicator = 'Y';
      const EffectiveDate = date;
      const ExpiryDate = null;

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

});
