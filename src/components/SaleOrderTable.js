// import React from 'react';

// const SaleOrderTable = ({ onEditOrder, isReadOnly }) => {
//   const orders = [
//     // Sample data
//     { id: 1, name: 'Spider 1', status: 'active' },
//     { id: 2, name: 'Spider 2', status: 'completed' },
//   ];

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Status</th>
//           {!isReadOnly && <th>Actions</th>}
//         </tr>
//       </thead>
//       <tbody>
//         {orders.map((order) => (
//           <tr key={order.id}>
//             <td>{order.id}</td>
//             <td>{order.name}</td>
//             <td>{order.status}</td>
//             {!isReadOnly && (
//               <td>
//                 <button onClick={() => onEditOrder(order)}>...</button>
//               </td>
//             )}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default SaleOrderTable;
