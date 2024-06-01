// src/App.js
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './pages/Dashboard';
import ActiveOrders from './pages/ActiveOrders';
import CompletedOrders from './pages/CompletedOrders';


const App = ({ theme, setTheme }) => {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem('isAuthenticated');

  const [saleOrders, setSaleOrders] = useState(() => {
    const savedOrders = localStorage.getItem('saleOrders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem('saleOrders', JSON.stringify(saleOrders));
  }, [saleOrders]);

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleEditOrder = (updatedOrder) => {
    setSaleOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === updatedOrder.id
          ? { ...updatedOrder, lastModified: new Date().toLocaleString() }
          : order
      )
    );
  };

  const handleAddOrder = (newOrder) => {
    setSaleOrders(prevOrders => [
      ...prevOrders,
      { ...newOrder, id: prevOrders.length + 1,  lastModified: new Date().toLocaleString() }
    ]);
  };

  if (!isAuthenticated && location.pathname !== '/login') {
    return <Navigate to="/login" replace />;
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/" element={<Dashboard theme={theme} setTheme={setTheme} />}>
        <Route path="active" element={<ActiveOrders orders={saleOrders} onEdit={handleEditOrder} onAdd={handleAddOrder} />} />
        <Route path="completed" element={<CompletedOrders orders={saleOrders} />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
