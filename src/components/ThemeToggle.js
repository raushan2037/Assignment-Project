import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.toggleBorder};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  font-size: 1.4rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.2rem;
  position: absolute;
  display:flex;
  margin-left:73rem;
  margin-top:-3.1rem;
  width: 5rem;
  height: 2.7rem;
  outline: none;
  

  &:focus {
    box-shadow: 0 0 3px 2px rgba(255, 105, 135, 0.3);
  }
`;

const SunIcon = styled.div`
  height: auto;
  width: 2.5rem;
  transition: all 0.3s linear;
  transform: ${({ lightTheme }) => (lightTheme ? 'translateY(0)' : 'translateY(100px)')};
  color: #f39c12;
`;

const MoonIcon = styled.div`
  height: auto;
  width: 2.5rem;
  transition: all 0.3s linear;
  transform: ${({ lightTheme }) => (lightTheme ? 'translateY(-100px)' : 'translateY(0)')};
  color: #f1c40f;
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer onClick={toggleTheme}>
      <SunIcon lightTheme={isLight}>☀️</SunIcon>
      <MoonIcon lightTheme={isLight}>🌙</MoonIcon>
    </ToggleContainer>
  );
};

export default ThemeToggle;
