import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products'
import Profile from './components/Profile'
import UpdateProd from './components/UpdateProd'
import AddProd from './components/AddProd';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateRoute />}>
            <Route path='/' element={<Products />} />
            <Route path='/add' element={<AddProd />} />
            <Route path='/update' element={<UpdateProd />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/logout' element={<h1>You are Logout.</h1>} />
          </Route>

          <Route path='/register' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
