import { Box, Checkbox, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";


interface TaskCardCheckedProps {
    title: string;
    onChange: () => void;
}

const TaskCardChecked: React.FC<TaskCardCheckedProps> = ({ title, onChange }) => {
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
            <Checkbox sx={{
                color: '#BFBFBF',
                '&.Mui-checked': {
                    color: 'white',
                },
            }} checked onChange={onChange} />
            <Box width="80%">
                <Typography fontSize="16px" fontWeight={700} color="#FFFFFF">{title}</Typography>
            </Box>

            <Link href={`/tasks/edit/${idEdit}`} passHref>
                <ArrowForwardIosIcon sx={{ color: "#000", cursor: "pointer" }} />
            </Link>
        </Box>

    )
}

export default TaskCardChecked

