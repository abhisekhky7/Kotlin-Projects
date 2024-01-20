
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./components/Login";
import Cart from "./components/Cart";

function App() {

  return (<>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/login" Component={Login}/>
      <Route path="/cart" Component={Cart}/>
    </Routes>
    </>
  );
}

export default App;
