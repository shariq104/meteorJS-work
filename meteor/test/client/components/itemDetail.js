import React from 'react';

const ItemDetail = ({ item }) => {
    debugger;
    var actind = item.ActiveIndicator;
    
    


    if (item.EffectiveDate != null && item.EffectiveDate != '') {
        var efdate = new Date(item.EffectiveDate);
        var month = (efdate.getMonth() + 1);
        var day = efdate.getDate();
        if (month < 10)
            month = "0" + month;
        if (day < 10)
            day = "0" + day;
        var efdate = efdate.getFullYear() + '-' + month + '-' + day;
    }

    if (item.ExpiryDate != null && item.ExpiryDate != '') {
        var expdate = new Date(item.ExpiryDate);
        var month = (expdate.getMonth() + 1);
        var day = expdate.getDate();
        if (month < 10)
            month = "0" + month;
        if (day < 10)
            day = "0" + day;
        var expdate = expdate.getFullYear() + '-' + month + '-' + day;
    }

    //props.item is accessible
    return (




        <tr>
            <td id={item._id}>{item.Field1}</td>
            <td id={item._id}>{item.Field2}</td>
            <td id={item._id}>{item.Field3}</td>
            <td id={item._id}>{item.Field4}</td>
            <td id={item._id}>{item.Field5}</td>
            <td id={item._id}>{item.Field6}</td>
            <td id={item._id}>{item.Field7}</td>
            <td id={item._id}>{item.Field8}</td>
            <td id={item._id}>{item.Field9}</td>
            <td id={item._id}>{item.Field10}</td>
            <td id={item._id}><input type="text" value={actind}></input></td>
            <td id={item._id}><input type="date" value={efdate}></input></td>
            <td id={item._id}><input type="date" value={expdate}></input></td>

        </tr>

    )
}

export default ItemDetail;