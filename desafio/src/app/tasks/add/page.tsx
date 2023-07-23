"use client";

import ReturnButton from "/home/magno/Music/test-react-next-js-junior/desafio/src/components/button/ReturnButton";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import React, { useRef, useState } from "react";
import Layout from '@/components/layouts/Layout';
import router from "next/router";

export default function Add() {

    const inputRef = useRef<HTMLInputElement>(null);

    const [inputValue, setInputValue] = useState("");

    localStorage.removeItem("task1")

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