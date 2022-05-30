import React, { useState } from "react";
import { FormControl, FormLabel, Button, Input, Stack,Box } from "@chakra-ui/react";
import axios from "axios";

function Admin() {
    const [csvFile, setCsvFile] = useState();
    const processCSV = (str, delim = ",") => {
        let data = str.split("\n");
        data.shift();
        let data1 = data.map((d) => {
            let row = d.split(",");
            let object = {
                barcode: row[0],
                product_name: row[1],
                shop_name: row[2],
                price: row[3],
            };
            return object;
        });
        data1.pop();
        console.log({ prices: data1 });
        return { prices: data1 };
    };

    const submit = () => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const text = e.target.result;
            const FileStructered = processCSV(text);
            console.log(FileStructered);
            axios.post("/api/admin", FileStructered).then((res) => {
                if (res.data.status === 200) {
                    console.log("work work");
                }
            });
        };

        reader.readAsText(csvFile);
    };
    return (
        <div>
            <Stack display="flex" justifyContent="center" alignItems="center" mt={24}>
                <FormControl p={2} justifyContent="center" alignContent="center">
                    <FormLabel>Insert CSV File</FormLabel>
                    <Input
                        mt={4}
                        border="none"
                        borderBottom="2px solid #343F56"
                        borderRadius="0"
                        id="csvFile"
                        type="file"
                        accept=".csv"
                        onChange={(e) => {
                            setCsvFile(e.target.files[0]);
                        }}
                    />{" "}
                    <br></br>
                    <br></br>
                        <Button
                        justifyContent="center"
                            onClick={(e) => {
                                e.preventDefault();
                                if (csvFile) submit();
                            }}
                        >
                            Submit
                        </Button>
                </FormControl>
            </Stack>
        </div>
    );
}

export default Admin;
