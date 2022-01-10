import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Account from './components/Account/Account';
import Nav from './components/Nav/Nav';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/account" element={<Account />} />
                <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
