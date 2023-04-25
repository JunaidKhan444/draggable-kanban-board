/**
 * Draggable-Kanban-Board
 *
 * @author   Junaid Khan
 *
 */
 
import { ColumnType } from "./enums";

export interface TaskModel {
    id: string;
    title: string;
    column: ColumnType;
    color: string;
}

