import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import {
    Badge,
    Box,
    Heading,
    IconButton,
    Stack,
    useColorModeValue
} from "@chakra-ui/react";
import { ColumnType } from "../utils/enums";

const ColumnColorScheme: Record<ColumnType, string> = {
    Todo: "gray",
    'In Progress': "blue",
    Blocked: "red",
    Completed: "green"
};

const Column = ({ column }: { column: ColumnType }) => {
    return (
        <Box>
            <Heading fontSize="md" >

            </Heading>
        </Box>
    );
}

export default Column;
