import { Box, Typography } from '@mui/material'
import React from 'react'

interface SubHeaderProps {
    checkedTasksValue: number
    totalTasks: number

}

const SubHeader: React.FC<SubHeaderProps> = ({ checkedTasksValue, totalTasks }) => {
    return (
        <Box display="flex" justifyContent="space-between">
            <Box>
                <Typography fontSize={24} fontWeight={700} fontFamily="Nunito" color="#262626">Task</Typography>
                <Typography fontSize={24} fontWeight={700} fontFamily="Nunito" color="#262626">List</Typography>
            </Box>
            <Box alignSelf="end" fontSize={14} fontFamily="Nunito" fontWeight={700} color="#7F00FF">
                {checkedTasksValue}/{totalTasks} Task finished{" "}
            </Box>

        </Box>
    )
}

export default SubHeader
