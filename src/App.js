import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login';
import Header from './component/Header';
import Registration from './component/Registration';

function App() {
  return (
    <div className="font-noto" >
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<Login /> } />
          <Route path="/registration" element={<Registration />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
