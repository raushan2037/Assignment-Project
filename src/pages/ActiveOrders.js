import React, { useState } from 'react';
import Modal from '../components/Modal';
import SaleOrderForm from '../components/SaleOrderForm';


const ActiveOrders = () => {
  const [orders, setOrders] = useState([
    { id: 1, name: 'Spider 1', price: '500', lastModified: '25/05/2024 (10:05 PM)' },
    { id: 2, name: 'Spider 2', price: '300', lastModified: '26/05/2024 (12:10 AM)' },
    { id: 3, name: 'Spider 3', price: '800', lastModified: '31/05/2024 (9:10 AM)' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const handleAddOrder = () => {
    setCurrentOrder(null);
    setShowModal(true);
  };

  const handleEditOrder = (order) => {
    setCurrentOrder(order);
    setShowModal(true);
  };
  

  const saveOrder = (order) => {
    if (currentOrder) {
      // Edit existing order
      setOrders(orders.map((o) => (o.id === order.id ? order : o)));
    } else {
      // Add new order
      order.id = orders.length + 1; // Simple ID generation logic
      setOrders([...orders, order]);
    }
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2 style={{marginTop:'60px',marginLeft:'53px',display:'flex'}}>Active Orders</h2>
      <button onClick={handleAddOrder} style={{marginLeft:'74rem',display:'flex',position:'absolute',marginTop:'-3rem',background:'#4cc9F0',fontSize:'17px',border:'none'}}>+ Sale Order</button>
      <table style={{marginTop:'80px', marginLeft:'56px',width:'78rem'}}>
        <thead>
          <tr> 
            <th style={{textAlign:'center'}}>ID</th>
            <th style={{textAlign:'center',width:'18rem'}}>Name</th>
            <th style={{textAlign:'center',width:'18rem'}}>Price (₹)</th>
            <th style={{textAlign:'center',width:'25rem'}}>Last Modified</th>
            {/* <th>Status</th> */}
            <th style={{textAlign:'center'}}>Edit/View</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td style={{textAlign:'center'}}>{order.id}</td>
              <td style={{textAlign:'center'}}>{order.name}</td>
              <td style={{textAlign:'center'}}>{order.price}</td>
              <td style={{textAlign:'center'}}>{order.lastModified}</td>
              {/* <td>{order.status}</td> */}
              {/* <td>{order.Actions}</td> */}
              {/* <td>{order.customername}</td>
              */}
              <td>
                <button style={{fontSize:'30px',marginTop:'-12px',border:'none',background:'none',marginLeft:'30px'}} onClick={() => handleEditOrder(order)}>...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <Modal 
          show={showModal}
          onClose={closeModal}
          title ={currentOrder ? 'Edit Order' : 'Add Order' }
        >
          <SaleOrderForm order={currentOrder} onSave={saveOrder} />
        </Modal>
      )}
    </div>
  );
};

export default ActiveOrders;