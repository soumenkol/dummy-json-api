
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/Products';
import Cart from "../src/Components/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
   
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/"  element={<Products/>}/>
      <Route path="/Cart"  element={<Cart/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
