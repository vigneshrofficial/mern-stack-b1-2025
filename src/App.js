
import { BrowserRouter, Route, Routes} from "react-router";

import HomePage from "./pages/Home.js";
import ProductPage from "./pages/Products.js";
import Header from "./components/Header.js";


const App = () => {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<ProductPage/>} /> 
        </Routes>
      </BrowserRouter>
    </>
   
  );
}

export default App;


