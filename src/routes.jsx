import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import  ProductList  from "./pages/ProductList";
import  ProductDetail  from "./pages/ProductDetail";

function AppRoutes () {
    return (
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/productlist" element={<ProductList />}></Route>
                <Route path="/productdetail" element={<ProductDetail />}></Route>
                <Route path="/" element={<HomePage />}></Route> 
                {/* A rota acima esta fixada na HomePage no botao cadastre-se, para criacao futura da tela de cadastro*/}
            </Routes>
       </BrowserRouter> 
    )
}

export default AppRoutes;