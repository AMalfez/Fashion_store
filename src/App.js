import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Singleproduct from './components/Singleproduct'
import Cart from './components/Cart'
import Error from './components/Error'
import Products from './components/Products'
import Home from './components/Home'
import Footer from './components/Footer'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginPopup";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isAuthenticated) {
    if (isLoading) {
      return(<div>Loading......</div>);
    }else{
    return (
      <>
      <Router>
         <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/product/:id' element={<Singleproduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error/>} /> 
        </Routes>
        <Footer/>
      </Router>
    </>
  );}
} else{
  if (isLoading) {
  return <div>Loading....</div>  
  }else{
  return(
    <>
    <LoginButton/>
    </>
  );}
}
}

export default App;
