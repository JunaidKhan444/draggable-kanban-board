/**
 * Draggable-Kanban-Board
 *
 * @author   Junaid Khan
 *
 */

import React from "react";
import { useDrag } from "react-dnd";
import { ItemType } from "../utils/enums";
import { DragItem, TaskModel } from "../utils/models";

const useTaskDragAndDrop = <T extends HTMLElement>({ task, index }:
    {
        task: TaskModel;
        index: number;
    }) => {
    const ref = React.useRef<T>(null);

    const [{ isDragging }, drag] = useDrag<
        DragItem,
        void,
        { isDragging: boolean }
    >({
        type: ItemType.TASK,
        item: { from: task.column, id: task.id, index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(ref);
    return {
        ref,
        isDragging,
    };

};

export default useTaskDragAndDrop;
