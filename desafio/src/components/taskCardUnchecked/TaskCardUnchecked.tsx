import { Box, Checkbox, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useState } from "react";
import Link from "next/link";

interface CardProps {
    title: string;
    onChange: () => void;
}

const TaskCardUnchecked: React.FC<CardProps> = ({ title, onChange }) => {
    function getKeyByValue(value: string) {

        const allItems = Object.entries(localStorage);


        for (let i = 0; i < allItems.length; i++) {
            const key = allItems[i][0];
            const storedValue = allItems[i][1];

            if (storedValue === value) {
                return key;
            }
        }

        return null;
    }

    const valueToFind = title;
    const idEdit = getKeyByValue(valueToFind);

    return (
        <Box
            paddingX="15px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            height="80px"
        >
            <Checkbox sx={{ color: "#bfbfbf" }} checked={false} onChange={onChange} />
            <Box width="80%">
                <Typography
                    color="#292929"
                    fontSize={16}
                    fontWeight={700}
                    fontFamily="Nunito"
                >
                    {title}
                </Typography>
            </Box>


            <Link href={`/tasks/edit/${idEdit}`} passHref>
                <ArrowForwardIosIcon sx={{ color: "#000", cursor: "pointer" }} />
            </Link>
        </Box >
    );
};

export default TaskCardUnchecked;