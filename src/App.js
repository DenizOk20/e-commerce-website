import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Layout/>}/>  
      </Routes>
    </div>
  );
}

export default App;
