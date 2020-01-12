import React from "react";
import ThTable from "./ThTable";
import TrTable from "./TrTable";

class Table extends React.Component{
  
   render(){
      return (
         <div className="row-list">
            <table className="table table-hover table-bordered">
               <tbody>
               <ThTable />
               <TrTable />
               </tbody>
            </table>
         </div>
         
      
      )
   }

}


export default Table