import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products'
import Profile from './components/Profile'
import UpdateProd from './components/UpdateProd'
import AddProd from './components/AddProd';
import Footer from './components/Footer';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/add' element={<AddProd />} />
          <Route path='/update' element={<UpdateProd />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/logout' element={<h1>You are Logout.</h1>} />
          <Route path='/register' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
