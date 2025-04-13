import { BrowserRouter, Routes, Route } from "react-router-dom";
import  HomePage  from "./pages/HomePage";
import  ProductList  from "./pages/ProductList";
import  ProductDetail  from "./pages/ProductDetail";
import Login from "./pages/Login";

function AppRoutes () {
    return (
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/productlist" element={<ProductList />}></Route>
                <Route path="/productdetail" element={<ProductDetail />}></Route>
                <Route path="/criacaodeconta" element={<ProductDetail />}></Route> 
                {/* A rota acima esta fixada na header no botao cadastre-se, para criacao futura da tela de cadastro*/}
                <Route path="/login" element={<Login/>}></Route>
                {/*A rota acima esta fixada no botão de entrar, para criacao futura da tela de login*/}
                <Route path="/carrinho" element={<HomePage />}></Route>
                {/* A rota acima esta fixada na HomePage no carrinho, para criacao futura da tela de carrinho*/}
            </Routes>
       </BrowserRouter> 
    )
}

export default AppRoutes;