import "./App.css";
import { BrowserRouter, Routes, Route, Link,Outlet} from "react-router-dom";
import Login from './pages/Login'
import Header from './pages/Header'
import Home from "./pages/Home";




function App() {
  return (
  <div className="app">
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </div>

  );
}



export default App;
