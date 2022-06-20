//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './common/Footer';
import Header from './common/Header';
import Mainbar from './common/Mainbar';
import Empleados from './components/TopPlatos';
import Login from './components/Login';
import Proveedores from './components/Chefs';

import Inicio from './home/Inicio';
import Chefs from './components/Chefs';
import Banner from './home/Banner';
import TopPlatos from './components/TopPlatos';
function App() {
  return (
    <BrowserRouter>
      
      {/* <Header /> */}
      <Mainbar />
      <main id='main-content'>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/proveedores' element={<Proveedores />} />
          <Route path='/empleados' element={<Empleados />} />
          <Route path='/toplatos' element={<TopPlatos />} />
          
          <Route path='/login' element={<Login />} />
          <Route path='/chefs' element={<Chefs/>} ></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;