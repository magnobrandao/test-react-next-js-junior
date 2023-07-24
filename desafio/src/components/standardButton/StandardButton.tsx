import { Button, Typography } from "@mui/material";
import React from "react";

interface ButtonProps {
    onClick?: () => void;
    label: string;
    color?: string;
}

export const StandardButton: React.FC<ButtonProps> = ({
    color,
    label,
    onClick,
}) => {
    return (
        <Button
            sx={{
                cursor: "pointer",
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "76px",
                borderRadius: "8px",
                bgcolor: color ? color : "#a401ff",
                color: "white",
                width: "100%",
                alignSelf: "flex-end",
                "&:hover": {

                    bgcolor: color ? color : "#a401ff",
                    color: "white",
                },
                textTransform: 'none'
            }}
            onClick={onClick}
            disableRipple

        >
            <Typography fontWeight={700} color="#FFFFFF">{label}</Typography>
        </Button>
    );
};