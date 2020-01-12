import React from "react";

class TrTable extends React.Component{
  
   render(){
      return (
         <tr className="row-list" id="contact-tr">
            <td><a href="/contacts/{{id}}/edit?allow=true">name</a></td>
            <td><a href="/contacts/{{id}}/orders">Заказы</a></td>
            <td>phone</td>
            <td>model</td>
            <td>year</td>
            <td>vin</td>
            <td>descContact</td>
            <td>userId</td>
            
        </tr>
      
      )
   }

}

export default TrTable