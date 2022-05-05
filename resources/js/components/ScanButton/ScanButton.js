import React from "react";
import "./ScanButton.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { BiBarcodeReader } from "react-icons/bi";

export default function ScanButton() {
    return (
        <div className="scan-btn">
            <Link to="/scan">
                <Button bgColor="#343F56" size="md" p={3.5} borderRadius="44%" color="#fff" fontSize="1.9rem">
                    <BiBarcodeReader />
                </Button>
            </Link>
        </div>
    );
}
