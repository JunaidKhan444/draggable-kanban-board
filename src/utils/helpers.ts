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
];

export function pickChakraRandomColor(variant = "") {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color + variant;
}

