import React from "react";


const BtnSearchContact = (props) => {
   return(
      <button className="btn btn-outline-secondary" id="search-contact" onClick={props.onSearchContact}>Найти в базе</button>
   )
}

export default  BtnSearchContact