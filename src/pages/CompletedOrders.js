import React, { useState } from 'react';
import Modal from '../components/Modal';
import SaleOrderForm from '../components/SaleOrderForm';

const CompletedOrders = () => {
  const [orders] = useState([
    { id: 1, name: 'Spider 01', price: '100', lastModified: '20/05/2023 (10:05 PM)',status:'Completed' },
    { id: 2, name: 'Spider 02', price: '600', lastModified: '23/0/2022 (5:10 PM)', status:'Completed'},
    { id: 3, name: 'Spider 03', price: '700', lastModified: '20/05/2024 (8:00 AM)', status:'Completed'}
  ]);
  const [showModal, setShowModal] = useState(false);
  const [viewOrder, setViewOrder] = useState(null);

  const handleViewOrder = (order) => {
    setViewOrder(order);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2 style={{marginTop:'60px',marginLeft:'53px',display:'flex'}}>Completed Orders</h2>
      <table style={{marginTop:'80px', marginLeft:'56px',width:'78rem'}}>
        <thead>
          <tr>
            <th style={{textAlign:'center'}}>ID</th>
            <th style={{textAlign:'center',width:'17rem'}}>Name</th>
            <th style={{textAlign:'center',width:'17rem'}}>Price (₹)</th>
            <th style={{textAlign:'center',width:'18rem'}}>Last Modified</th>
            <th style={{textAlign:'center',width:'10rem'}}>Status</th>
            <th style={{textAlign:'center'}}>View</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td style={{textAlign:'center'}}>{order.id}</td>
              <td style={{textAlign:'center'}}>{order.name}</td>
              <td style={{textAlign:'center'}}>{order.price}</td>
              <td style={{textAlign:'center'}}>{order.lastModified}</td>
              <td style={{textAlign:'center'}}>{order.status}</td>
              <td>
                <button style={{fontSize:'30px',marginTop:'-12px',border:'none',background:'none',marginLeft:'30px'}} onClick={() => handleViewOrder(order)}>...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <Modal
          show={showModal}
          onClose={closeModal}
          title="View Order"
        >
          <SaleOrderForm order={viewOrder} readOnly />
        </Modal>
      )}
    </div>
  );
};

export default CompletedOrders;