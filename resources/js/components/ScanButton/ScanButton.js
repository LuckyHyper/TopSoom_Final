import React from "react";
import "./ScanButton.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function ScanButton() {
    return (
        <div className="scan-btn">
            <Link to="/scan">
                <Button bgColor="rgba(0, 0, 0, 0.75)" size="md" borderRadius="45%">
                    <span className="add-btn"></span>
                </Button>
            </Link>
        </div>
    );
}
