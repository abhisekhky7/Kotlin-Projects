import React from 'react'
import Home from "./pages/Home";
import { Header } from "./components/Header";
import Footer from './components/Footer';
import CanvasContent from './components/Canvas/CanvasContent'

function App() {
  return (
    <div className="App d-flex flex-column container-fluid p-0 "> 
      <Header/>
      <Home/>
      <CanvasContent/>
    <Footer/>
    </div>
  );
}

export default App;
