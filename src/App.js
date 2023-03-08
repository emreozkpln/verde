import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import { Route,Routes, useParams } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import { Toaster } from "react-hot-toast";
import NewProduct from "./pages/NewProduct";

function App() {
  

  
  return (
    <div className="m-6">
      <Header/>
      <Toaster position="top-left"/>
      <Routes>
        <Route path="/" element={<ProductList />}/>
        <Route path="/:id" element={<ProductDetails />}/>
        <Route path="/newPost" element={<NewProduct />}/>
      </Routes>
    </div>
  );
}

export default App;
