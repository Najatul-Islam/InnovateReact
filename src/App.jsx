import './App.css'
import Button from './components/Button'
import Header from './components/layouts/Header'
import RootLayouts from './components/layouts/RootLayouts';
import {Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About';
import Service from './components/pages/Service';
import Error from './components/pages/Error';
import Portfolio from './components/pages/Portfolio';
import Price from './components/pages/Price';
import Blog from './components/pages/Blog';
function App() {
  return (
    <>
  <Routes>
        <Route path="/" element={<RootLayouts />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Price" element={<Price />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="*" element={<Error />} />
 </Routes>

   </>
  )
}


export default App

