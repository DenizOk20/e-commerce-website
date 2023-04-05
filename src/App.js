import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import ProductPage from './ProductPage';
import SingleProduct from './components/SingleProduct/SingleProduct'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}/>
          <Route path='/productlist' element={<ProductPage/>}/>
          <Route path='/product' element={<SingleProduct/>}/>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
