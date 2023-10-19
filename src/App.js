import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home"
import Landing from "./Pages/Landing"
import Category from "./Pages/Category"
import Header from "./Components/Header"
import Footer from "./Components/Footer"



function App() {
  return (
    <>    
      <Header/>
       <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/category' element={<Category/>}/>
       </Routes>
       <Footer/>

    </>
  );
}

export default App;
