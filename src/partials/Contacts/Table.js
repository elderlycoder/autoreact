import React from "react";
import ThTable from "./ThTable";
import TrTable from "./TrTable";

const Table = ({contacts}) => {
  const elements = contacts.map((item) => {
    return (<tr className="row-list" key={item._id}>
      <TrTable {...item} />
    </tr>
    )
  })

  return(
    <div className="row-list">
      <table className="table table-hover table-bordered">
        <tbody>
          <ThTable />
          {elements}
        </tbody>
      </table>
    </div>
  )
}

// class Table extends React.Component {
//   render() {
//     return (
//       <div className="row-list">
//         <table className="table table-hover table-bordered">
//           <tbody>
//             <tr>
//               <th>Имя</th>
//               <th>Заказы</th>
//               <th>Телефон</th>
//               <th>Автомобиль</th>
//               <th>Год</th>
//               <th>VIN</th>
//               <th>Примечание</th>
//               <th>userId</th>
//             </tr>

//           <TrTable />
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

export default Table;
