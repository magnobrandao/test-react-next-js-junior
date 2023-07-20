import { Box } from "@mui/material";
import React, { Children, ReactNode } from 'react'
import Header from "../header/Header";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        < Box height="100vh" bgcolor="#fff" pt="30px" pl="30px" pr="30px" >
            {children}
        </Box >
    )
}

export default Layout


