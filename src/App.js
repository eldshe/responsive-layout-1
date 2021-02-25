import logo from './logo.svg';
import './App.css';
import TopAppBar from './layout/topBar';
import ResponsiveDrawer from './layout/sideBar';
import MainLayout from './layout';
import theme from './theme/index'
import { ThemeProvider } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>      
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
