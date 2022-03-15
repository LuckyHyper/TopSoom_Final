import React from "react";
import { Button as Btn, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

/**
 * routing will switch between a navigation button or an action button
 * @param {*} param0
 * @returns {JSX.Element}
 */
function Button({ path, title, routing = false, ...rest }) {
    return (
        <Stack align="center" margin-bottom={4}>
            {routing ? (
                <Link to={path}>
                    <Btn
                        {...rest}
                        colorScheme="teal"
                        variant="outline"
                        color="#0BC5EA"
                    >
                        {title}
                    </Btn>
                </Link>
            ) : (
                <Btn
                    {...rest}
                    colorScheme="teal"
                    variant="outline"
                    color="#0BC5EA"
                >
                    {title}
                </Btn>
            )}
        </Stack>
    );
}

export default Button;
