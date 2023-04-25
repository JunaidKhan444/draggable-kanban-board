/**
 * Draggable-Kanban-Board
 *
 * @author   Junaid Khan
 *
 */
 
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ColumnType } from "../utils/enums";
import { pickChakraRandomColor } from "../utils/helpers";
import { TaskModel } from "../utils/models";
import useTaskCollection from "./useTaskCollection";

const MAX_TASK_PER_COLUMN = 100;

const useColumnTasks = (column: ColumnType) => {
    const [tasks, setTasks] = useTaskCollection();

    const addEmptyTask = React.useCallback(() => {
        console.log(`Adding new empty task to $(column) column`);

        setTasks((allTasks) => {
            const columnTasks = allTasks[column];
            if (columnTasks.length > MAX_TASK_PER_COLUMN) {
                console.log("Too many task!")
            }

            const newColumnTask: TaskModel = {
                id: uuidv4(),
                title: "New " + column + " task",
                color: pickChakraRandomColor(".300"),
                column,
            };
            return {
                ...allTasks,
                [column]: [newColumnTask, ...columnTasks],
            };
        });
    }, [column, setTasks]);

    const updateTask = React.useCallback(
        (id: TaskModel["id"], updatedTask: Omit<Partial<TaskModel>, "id">) => {
            console.log(`Updating Task ${id} with ${JSON.stringify(updateTask)}`);

            setTasks((allTasks) => {
                const columnTasks = allTasks[column];

                return {
                    ...allTasks,
                    [column]: columnTasks.map((task) =>
                        task.id === id ? { ...task, ...updatedTask } : task,
                    ),
                };
            });
        },
        [column, setTasks],
    );

    const deleteTask = React.useCallback(
        (id: TaskModel["id"]) => {
            console.log(`Remove task ${id}..`);

            setTasks((allTasks) => {
                const columnTasks = allTasks[column];
                return {
                    ...allTasks,
                    [column]: columnTasks.filter((task) => task.id !== id),
                };
            });
        },
        [column, setTasks],
    );

    return {
        tasks: tasks[column],
        addEmptyTask,
        updateTask,
        deleteTask,
    };
}

export default useColumnTasks;
