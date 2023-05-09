/**
 * Draggable-Kanban-Board
 *
 * @author   Junaid Khan
 *
 */

import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Column from "./components/Column";
import DarKModeIconButton from "./components/DarKModeIconButton";
import { ColumnType } from "./utils/enums";

const App = () => {
    return (
        <>
            <Heading
                fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                fontWeight="bold"
                textAlign="center"
                bgGradient="linear(to-l,#F0FF42,#379237)"
                bgClip="text"
                mt={6}
            >
                Welcome to Draggable Kanban
            </Heading>
            <DarKModeIconButton position="absolute" top={0} right={2} />
            <Container maxWidth="contaianer.lg" px={4} py={10}>
                <DndProvider backend={HTML5Backend}>
                    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 16, md: 4 }}>
                        <Column column={ColumnType.TO_DO} />
                        <Column column={ColumnType.IN_PROGRESS} />
                        <Column column={ColumnType.BLOCKED} />
                        <Column column={ColumnType.COMPLETED} />
                    </SimpleGrid>
                </DndProvider>
            </Container>
        </>
    );
};

export default App;
