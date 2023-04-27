import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import ProductPage from './ProductPage';
import SingleProduct from './components/SingleProduct/SingleProduct'
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}/>
          <Route path='/productlist' element={<ProductPage/>}/>
          <Route path='/product' element={<SingleProduct/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>} />
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
