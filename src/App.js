import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import ProductPage from './ProductPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Layout/>}/>
          <Route path='/productlist' element={<ProductPage/>}/>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
