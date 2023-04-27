import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

function DarKModeIconButton({ ...rest }: React.ComponentPropsWithoutRef<typeof IconButton>) {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return (
        <IconButton
            onClick={toggleColorMode}
            icon={isDark ? <MoonIcon /> : <SunIcon />}
            aria-label={'dark-mode-togle'}
            {...rest}
        />
    );
}

export default DarKModeIconButton;
