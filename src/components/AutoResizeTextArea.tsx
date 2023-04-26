/**
 * Draggable-Kanban-Board
 *
 * @author   Junaid Khan
 *
 */

import { Textarea, TextareaProps } from "@chakra-ui/react";
import React from "react";
import ResizeTextarea from "react-textarea-autosize";

const AutoResizeTextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {

    return <Textarea as={ResizeTextarea} minH="unset" ref={ref} {...props} />
});

export default AutoResizeTextArea;
