import React from 'react'
import Home from "./pages/Home";
import { Header } from "./components/Header";
import Footer from './components/Footer';
import CanvasContent from './components/Canvas/CanvasContent'

function App() {
  return (
    <div className="App">
      <header>
      <Header/>
      </header>
      <Home/>
      <CanvasContent/>
    <Footer/>
    </div>
  );
}

export default App;
