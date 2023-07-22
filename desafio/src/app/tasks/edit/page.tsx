"use client";

import ReturnButton from "/home/magno/Music/test-react-next-js-junior/desafio/src/components/button/ReturnButton";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import React, { useRef, useState } from "react";

export default function Edit() {

    const inputRef = useRef<HTMLInputElement>(null);

    const [inputValue, setInputValue] = useState("");


    const handleCreateTask = () => {

        if (inputValue.trim() !== "") {

            const taskId = `task${localStorage.length + 1}`;

            localStorage.setItem(taskId, inputValue);

            console.log("Task added to localStorage:", taskId, inputValue);

            setInputValue("");
        }
    };


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setInputValue(event.target.value);
    };

    return (
        <div style={{ height: "100vh", padding: "20px", backgroundColor: "white" }}>
            <ReturnButton page="Edit" />

            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                height="80%"
            >
                <Typography>Task title</Typography>
                <Box bgcolor="#fafafa" width="100%" maxWidth="400px" px="10px">
                    <TextField
                        fullWidth
                        ref={inputRef}
                        placeholder="Type here"
                        value={inputValue}
                        onChange={handleInputChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EditNoteIcon sx={{ color: "#a401ff" }} />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#fafafa",
                                },
                            },
                        }}
                    />
                </Box>
            </Box>

            <Box
                mt="10px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="60px"
                bgcolor="#a401ff"
                color="white"
                width="100%"
                alignSelf="flex-end"
                sx={{ cursor: "pointer" }}
                onClick={handleCreateTask}
            >
                <Typography>Create Task</Typography>
            </Box>
        </div>
    );
}