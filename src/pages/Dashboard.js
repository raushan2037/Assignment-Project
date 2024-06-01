import React from 'react';
import './Dashboard.css';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

const Dashboard = ({ theme, setTheme }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <header className='navbar'>
        <h1 style={{marginLeft:'50px',paddingTop:'15px',color:'yellow',fontSize:'25px'}}>Sale Order <span style={{color:'#4cc9F0'}}>Management</span></h1>
        <button onClick={handleLogout} className='button'>Logout</button>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        
      </header>
      <nav className='list'>
        <Link to="active" style={{marginLeft:'140px',width:'120px',background:'#4cc9F0',height:'30px',textAlign:'center',borderRadius:'5px',paddingTop:'11px',textDecoration:'none'}}>Active Orders</Link>
        <Link to="completed" style={{marginLeft:'70px',width:'150px',background:'#4cc9F0',height:'30px',textAlign:'center',borderRadius:'5px',paddingTop:'11px',textDecoration:'none'}}>Completed Orders</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;