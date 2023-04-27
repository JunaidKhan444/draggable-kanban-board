/**
 * Draggable-Kanban-Board
 *
 * @author   Junaid Khan
 *
 */

const colors = [
    "red",
    "orange",
    "blue",
    "green",
    "teal",
    "cyan",
    "purple",
    "pink",
    "FC7300"
];

export function pickChakraRandomColor(variant = "") {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color + variant;
};

export function swap<T>(arr: T[], i: number, j: number) {
    const copy = [...arr];
    const tmp = copy[i];
    copy[i] = copy[j];
    copy[j] = tmp;
    return copy;
};
