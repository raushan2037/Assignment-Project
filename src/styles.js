import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
};

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.text};
  }

  button {
    background: ${({ theme }) => theme.toggleBorder};
    color: ${({ theme }) => theme.text};
    border: 2px solid ${({ theme }) => theme.background};
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.toggleBorder};
    }
  }

  input, select {
    padding: 10px;
    margin: 5px 0;
    border: 1px solid ${({ theme }) => theme.toggleBorder};
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    
    th, td {
      padding: 10px;
      border: 1px solid ${({ theme }) => theme.toggleBorder};
      text-align: left;
    }
  

    th {
      background: ${({ theme }) => theme.background};
      color: #fff;
    }
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    margin: 0 10px;

  }
`;
