import { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/SignIn/SignIn';
import Account from './components/Account/Account';
import Nav from './components/Nav/Nav';
import Register from './components/Register/Register';

function App() {
  
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav user={user} setUser={setUser} />
        <Routes>
                <Route path="/" element={<Home setUser={setUser}/>} />
                <Route path="/account" element={<Account user={user}/>} />
                <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
