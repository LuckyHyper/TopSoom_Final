import React, { useState } from "react";
import "../css/app.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PriceList from "./components/PriceList";
import ProductList from "./components/ProductList";
import Scanner from "./components/Scanner/Scanner";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Admin from "./components/Admin";
import Home from "./components/Home/Home";
import axios from "axios";
import "../css/app.css";
import ShopList from "./components/ShopList";
import Navbar from "./components/Navbar/Navbar";

axios.defaults.baseURL = "http://192.168.1.100:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("auth_token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});

function App() {
    const [data, setData] = useState(null);
    const [shopNum, setShopNum] = useState(0);
    const [reload3, setReload3] = useState(0);
    const[search, setSearch] = useState();

    const ProductsByName = async () => {
        return await axios
            .get(`/api/product?product_name=${search}`)

            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })

            .catch((err) => console.log(err));
    };

    return (
        <ChakraProvider>
            <Router>
                <Navbar shopNum={shopNum} setShopNum={setShopNum} reload3={reload3} setReload3={setReload3}/>
                <Routes>
                    <Route
                        path="/"
                        element={<Home data={data} setData={setData} ProductsByName={ProductsByName} setSearch={setSearch} />}
                    />
                    <Route
                        exact
                        path="/product-list"
                        element={<ProductList setSearch={setSearch} data={data} setData={setData} ProductsByName={ProductsByName} setShopNum={setShopNum} shopNum={shopNum} />}
                    />
                    <Route
                        path="/price-list"
                        element={<PriceList data={data} setData={setData} setShopNum={setShopNum} shopNum={shopNum} />}
                    />
                    <Route
                        path="/shop-list"
                        element={<ShopList data={data} setData={setData} setShopNum={setShopNum} shopNum={shopNum} />}
                    />
                    <Route path="/login" element={<Login setReload3={setReload3} reload3={reload3} />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/scan" element={<Scanner />} />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}
export default App;
