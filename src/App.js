import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element = {<Home />} />
      <Route exact path='/login' element = {<Login />} />
    </Routes>
    </>
  );
}

export default App;
