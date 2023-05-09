/**
 * Draggable-Kanban-Board
 *
 * @author   Junaid Khan
 *
 */

import React from "react";
import { useDrag, useDrop, XYCoord } from "react-dnd";
import { ItemType } from "../utils/enums";
import { DragItem, TaskModel } from "../utils/models";

const useTaskDragAndDrop = <T extends HTMLElement>({ task, index, handleDropHover }:
    {
        task: TaskModel;
        index: number;
        handleDropHover: (i: number, j: number) => void;
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

    const [_, drop] = useDrop<DragItem, void, unknown>({
        accept: ItemType.TASK,
        hover: (item, monitor) => {
            if (!ref.current) {
                return;
            }
            const draggedItemIndex = item.index;
            const hoveredItemIndex = index;
            if (draggedItemIndex === hoveredItemIndex) {
                return;
            }
            const isDraggedItemAboveHovered = draggedItemIndex < hoveredItemIndex;
            const isDraggedItemBelowHovered = !isDraggedItemAboveHovered;

            const { x: mouseX, y: mouseY } = monitor.getClientOffset() as XYCoord;

            const hoveredBoundingRect = ref.current.getBoundingClientRect();

            const hoverMiddleHeight = (hoveredBoundingRect.bottom - hoveredBoundingRect.top) / 2;
            const mouseYRelativeToHovered = mouseY - hoveredBoundingRect.top;
            const isMouseYAboveHoveredMiddleHeight = mouseYRelativeToHovered < hoverMiddleHeight;
            const isMouseYBelowHoveredMiddleHeight = mouseYRelativeToHovered > hoverMiddleHeight;

            if (isDraggedItemAboveHovered && isMouseYAboveHoveredMiddleHeight) {
                return;
            }
            if (isDraggedItemBelowHovered && isMouseYBelowHoveredMiddleHeight) {
                return;
            }

            handleDropHover(draggedItemIndex, hoveredItemIndex);

            item.index = hoveredItemIndex;
        },
    });

    drag(drop(ref));
    return {
        ref,
        isDragging,
    };

};

export default useTaskDragAndDrop;

