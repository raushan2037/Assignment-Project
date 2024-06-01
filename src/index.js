import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, } from 'react-router-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from './styles';
// import usePersistedState from './usePersistedState';
// import reportWebVitals from './reportWebVitals';
import usePersistedState from './hooks/usePersistedState';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const Root = () => {
  const [theme, setTheme] = usePersistedState('theme', 'light');
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Router>
        <App theme={theme} setTheme={setTheme} />
      </Router>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

// reportWebVitals();
