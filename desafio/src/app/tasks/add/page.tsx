"use client";

import ReturnButton from "../../../components/returnButton/ReturnButton";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import React, { useRef, useState } from "react";
import Layout from '@/components/layouts/Layout';

export default function Add() {

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const [inputValue, setInputValue] = useState("");


    const handleCreateTask = () => {

        if (inputValue.trim() !== "") {

            const taskId = `task${localStorage.length + 1}`;

            localStorage.setItem(taskId, inputValue);

            setSuccess(true);

            setTimeout(() => {
                setSuccess(false);
            }, 2000);

            setInputValue("");
        } else {
            setError(true);
        }
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleInputFocus = () => {
        setError(false);
    };

    return (
        <Layout>
            <ReturnButton page="Create" />

            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="70vh"
            >
                <Typography>Task title</Typography>
                <Box bgcolor="#fafafa" width="100%" px="10px">
                    <TextField
                        fullWidth
                        ref={inputRef}
                        placeholder="Type here"
                        value={inputValue}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
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

                {error && (
                    <Typography color="red" mt="10px">
                        Please enter a task title
                    </Typography>
                )}
                {success && (
                    <Typography color="green" mt="10px">
                        Task created successfully
                    </Typography>
                )}
            </Box>



            <Box
                mt="10px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="76px"
                borderRadius="8px"
                bgcolor="#a401ff"
                color="white"
                width="100%"

                alignSelf="flex-end"
                sx={{ cursor: "pointer" }}
                onClick={handleCreateTask}
            >
                <Typography>Create Task</Typography>
            </Box>

        </Layout>
    );
}