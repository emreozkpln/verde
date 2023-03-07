import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import { Route,Routes, useParams } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";


function App() {
  

  
  return (
    <div className="m-6">
      <Header/>
      <Routes>
        <Route path="/" element={<ProductList />}/>
        <Route path="/:id" element={<ProductDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
