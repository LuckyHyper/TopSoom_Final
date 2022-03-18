import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PriceList from "./components/PriceList";
import Scan from "./components/scanner";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Admin from './components/Admin';
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

function App() {
    const [data, setData] = useState(null);
    const [text, setText] = useState("");

    const showProduct = async () => {
        return await axios
            .get(`http://127.0.0.1:8000/api/price?barcode=${text}`)

            .then((res) => {
                setData(res.data);
            })

            .catch((err) => console.log(err));
    };

    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<PriceList data={data} setData={setData} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route
                        path="/scan"
                        element={
                            <Scan showProduct={showProduct} setText={setText} />
                        }
                    />
                    <Route
                        path="/productDetails"
                        element={<ProductDetails />}
                    />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}
export default App;
