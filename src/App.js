import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nabvar from './components/Nabvar';
import InitialFocus from './components/SignModal';
import Homepage from './Pages/Homepage';
import Orderconfirm from './Pages/Orderconfirm';
import Payment from './Pages/Payment';
import Payment2 from './Pages/payment2';
import Product from './Pages/Product';
import Products from './Pages/Products';

function App() {
  return (
    <Box>
        <Nabvar/>
         <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<InitialFocus/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/product/:pname/:id' element={<Product/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/paymentmode' element={<Payment2/>}/>
          <Route path='/confirm' element={<Orderconfirm/>}/>
         </Routes>
        <Footer/>
    </Box>
  );
}

export default App;
