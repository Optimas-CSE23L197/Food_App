import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Placeorder from './pages/Placeorder/Placeorder'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import { useState } from 'react'
import Cart from './pages/Cart/Cart'
// import Test from './components/Test'

function App() {

  const [login, setLogin] = useState(false);

  return (
    <>
    {login ? <Login setLogin={setLogin}/>:<></>}
      <div className="app w-[80%] h-full m-auto">
        <Navbar setLogin={setLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
      {/* <Test /> */}
    </>
  )
}

export default App