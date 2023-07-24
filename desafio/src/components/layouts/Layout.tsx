import { Box } from "@mui/material";
import React, { Children, ReactNode } from 'react'
import Header from "../header/Header";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        < Box minHeight="100vh" bgcolor="#fff" pt="30px" px="5vw" minWidth="100vw"  >
            {children}
        </Box >
    )
}

export default Layout


