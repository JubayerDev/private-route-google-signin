import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login'
import Orders from './components/Orders/Orders';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/orders' element={ <Orders />}/>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
