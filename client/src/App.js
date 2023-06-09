import { Link, Route, Routes, Redirect } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import ProductPage from './ProductPage';
import SingleProduct from './components/SingleProduct/SingleProduct'
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import ProductList from './components/ProductList/ProductList';
import Success from './components/Success/Success';
import { useSelector } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}/>
          <Route path='/products/:category' element={<ProductList/>}/>
          <Route path='/product/:id' element={<SingleProduct/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>} /> 
          <Route path='/cart' element={<Cart/>} />
          <Route path='/success' element={<Success/>} />
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
