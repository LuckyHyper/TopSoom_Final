import React, { useState, useEffect } from "react";
import Button from "./Button";
import Navbar from "./Navbar/Navbar";

export default function Scan(props) {
    const [text, setText] = useState("");

	useEffect(() => {
		Quagga.init({
			inputStream : {
			  name : "Live",
			  type : "LiveStream",
			  target: document.querySelector('#scan')   
			},
			  decoder : {
					readers : ["ean_reader"]
			}
	  }, function(err) {
			if (err) {
				  console.log(err);
				return
		  }
		  console.log("Initialization finished. Ready to start");
		  Quagga.start();
		});
	});

    return (
        <div>
            <Navbar />
            <br />
			<div id="scan"></div>
        </div>
    );
}
