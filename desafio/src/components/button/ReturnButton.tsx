import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";

interface ReturnButtonProps {
    page: string;
}

const ReturnButton: React.FC<ReturnButtonProps> = ({ page }) => {
    return (
        <Box display="flex" fontFamily="Nunito" fontWeight="700px" color="#262626">
            <Link href="/tasks">
                <ArrowBackIosIcon />
            </Link>
            <Box>
                <Typography fontSize={24} fontWeight={700}>{page}</Typography>
                <Typography fontSize={24} fontWeight={700}>Task</Typography>
            </Box>
        </Box>
    );
};

export default ReturnButton;