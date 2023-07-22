import { Box, Checkbox, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


interface TaskCardCheckedProps {
    title: string;
    onChange: () => void;
}

const TaskCardChecked: React.FC<TaskCardCheckedProps> = ({ title, onChange }) => {
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
            <ArrowForwardIosIcon sx={{ color: "#000" }} />
        </Box>

    )
}

export default TaskCardChecked

