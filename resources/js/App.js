import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PriceList from "./components/PriceList";
import Scan from "./components/scanner";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ProductDetails from "./components/ProductDetails/ProductDetails";

import Admin from "./components/Admin";
import axios from "axios";

axios.defaults.baseURL = "http://192.168.1.106:8000";
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
    const [text, setText] = useState("");

    const showProduct = async () => {
        return await axios

            .get(`/api/price?barcode=${text}`)

            .then((res) => {
                setData(res.data);
            })

            .catch((err) => console.log(err));
    };

    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<PriceList data={data} setData={setData} />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route
                        path="/scan"
                        element={
                            <Scan showProduct={showProduct} setText={setText} />
                        }
                    />
                    <Route
                        path="/ProductDetails"
                        element={<ProductDetails />}
                    />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}
export default App;
