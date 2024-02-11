import './App.css';
import Home from './components/Home';
import Header from './components/Header'
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (

    <div className="App container-fluid ct flex-column p-0">
    <BrowserRouter>
            <Header/>
         <Routes>    
        <Route path='/' element={<Home/>} />
        <Route path='home' element={<Home/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='about' element={<About/>} />
        </Routes>
        </BrowserRouter>  
    </div>
  );
}

export default App;
