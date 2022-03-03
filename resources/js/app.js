import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Scan from "./components/scanner";
import ProductDetails from "./components/productDetails/productDetails";

function App() {
    const [data, setdata] = useState(null);
    const [text, setText] = useState("");

    const showProduct = async () => {
        return await axios
            .get(`http://127.0.0.1:8000/api/price/${text}`)

            .then((res) => {
                setdata(res.data);
            })

            .catch((err) => console.log(err));
    };

    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home data={data} />} />
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
                </Routes>
            </Router>
        </ChakraProvider>
    );
}
export default App;
