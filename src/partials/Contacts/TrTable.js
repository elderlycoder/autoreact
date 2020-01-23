import React from "react";
//import GetContacts from "../../services/getContacts";

const TrTable = ({name, phone, model, year, vin, descContact, _id}) => {
  
     //console.log(_id)
     const urlName = `/contacts/${_id}/edit?allow=true`,
            urlOrders = `/contacts/{_id}/orders`
      return (
         <>
            <td><a href={urlName}>{name}</a></td>
            <td><a href={urlOrders}>Заказы</a></td>
            <td>{phone}</td>
            <td>{model}</td>
            <td>{year}</td>
            <td>{vin}</td>
            <td>{descContact}</td>
            </>
         
      )
}
   
   // render() {
   //    const { error, contacts } = this.state;
  
   //    const items = this.renderItems(contacts);
   //    return <div className="left">{items}</div>;
   //  }



export default TrTable