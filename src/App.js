import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nabvar from './components/Nabvar';
import InitialFocus from './components/SignModal';
import Homepage from './Pages/Homepage';
import Products from './Pages/Products';

function App() {
  return (
    <Box>
        <Nabvar/>
         <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<InitialFocus/>}/>
          <Route path='/products' element={<Products/>}/>
         </Routes>
        <Footer/>
    </Box>
  );
}

export default App;
