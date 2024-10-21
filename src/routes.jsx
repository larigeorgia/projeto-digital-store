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
                <Route path="/home" element={<HomePage />}></Route>
                {/*A rota acima esta fixada no logo da pagina e retorna pra home  */}
                <Route path="/carrinho" element={<HomePage />}></Route>
                {/* A rota acima esta fixada na HomePage no carrinho, para criacao futura da tela de carrinho*/}
            </Routes>
       </BrowserRouter> 
    )
}

export default AppRoutes;