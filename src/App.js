import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';


function App() {
  return (
    <>
    <CartProvider>
    <Routes>
      <Route exact path='/' element = {<Home />} />
      <Route exact path='/login' element = {<Login />} />
      <Route exact path='/createuser' element = {<Signup />} />
    </Routes>
    </CartProvider>
    </>
  );
}

export default App;
