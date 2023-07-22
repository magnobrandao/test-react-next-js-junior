import { Box, Checkbox, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";


interface CardProps {
    title: string;
    onChange: () => void;
}


const TaskCardUnchecked: React.FC<CardProps> = ({ title, onChange }) => {
    return (

        <Box
            paddingX="15px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            height="80px"
        >

            <Checkbox
                sx={{ color: "#bfbfbf" }}
                checked={false}
                onChange={onChange}
            />
            <Box width="80%">

                <Typography color="#292929" fontSize={16} fontWeight={700} fontFamily="Nunito">{title}</Typography>
            </Box>

            <ArrowForwardIosIcon sx={{ color: "#000" }} />
        </Box>
    );
};

export default TaskCardUnchecked;
