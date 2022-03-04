import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Scan from "./components/scanner";
import ProductDetails from "./components/productDetails/productDetails";

function App() {
    const [data, setdata] = useState(null);
    const [barcode, setBarcode] = useState("");
    
    const showProduct = async () => {
        return await axios
            .get(`http://127.0.0.1:8000/api/price?barcode=${barcode}`)

            .then((res) => {
                setdata(res.data);
            })

            .catch((err) => console.log(err));
    };

    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home data={data} setdata={setdata} />} />
                    <Route
                        path="/scan"
                        element={
                            <Scan showProduct={showProduct} setText={setBarcode} />
                        }
                    />
                    <Route
                        path="/productDetails"
                        element={<ProductDetails />}
                    />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}
export default App;
