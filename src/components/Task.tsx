/**
 * Draggable-Kanban-Board
 *
 * @author   Junaid Khan
 *
 */

import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { TaskModel } from "../utils/models";
import { DeleteIcon } from "@chakra-ui/icons";
import AutoResizeTextArea from "./AutoResizeTextArea";
import useTaskDragAndDrop from "../hooks/useTaskDragAndDrop";

interface TaskProps {
    index: number;
    task: TaskModel;
    onUpdate: (id: TaskModel["id"], updateTask: TaskModel) => void;
    onDelete: (id: TaskModel["id"]) => void;
    onDropHover: (i: number, j: number) => void;
};

const Task: React.FC<TaskProps> = ({ index, task, onUpdate: handeleUpdate, onDelete: handleDelete, onDropHover: handleDropHover, }) => {

    const { ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>({ task, index, handleDropHover });
    const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newTitle = e.target.value;
        handeleUpdate(task.id, { ...task, title: newTitle });
    };

    const handleDeleteClick = () => {
        handleDelete(task.id);
    };
    return (
        <Box
            ref={ref}
            as="div"
            role="group"
            position="relative"
            rounded="lg"
            w={200}
            pl={3}
            pr={7}
            pt={3}
            pb={1}
            boxShadow="xl"
            cursor="grab"
            bgColor={task.color}
            flexGrow={0}
            flexShrink={0}
            opacity={isDragging ? 0.5 : 1}
        >
            <IconButton
                position="absolute"
                top={0}
                right={0}
                zIndex={100}
                aria-label="delete-task"
                size="md"
                colorScheme="solid"
                color="gray.700"
                icon={<DeleteIcon />}
                opacity={0}
                _groupHover={{
                    opacity: 1
                }}
                onClick={handleDeleteClick}
            />
            <AutoResizeTextArea
                value={task.title}
                fontWeight="semibold"
                cursor="inherit"
                border="none"
                p={0}
                resize="none"
                minH={70}
                maxH={200}
                focusBorderColor="none"
                color="gray.700"
                onChange={handleTitleChange}
            />


        </Box>
    );
}

export default Task;
