import React, { Component, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Scanner from "./pages/Scanner";
import "./App1.css";

function App() {
    const [codeB, setCodeB] = useState();

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home codeB={codeB} />} />
                <Route
                    path="/scanner"
                    element={<Scanner Codetransfer={(codeB) => setCodeB(codeB)} />   }
                />
            </Routes>
        </Router>
    );
}
//}
export default App;
