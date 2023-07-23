"use client";

import ReturnButton from "/home/magno/Music/test-react-next-js-junior/desafio/src/components/button/ReturnButton";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import React, { useEffect, useRef, useState } from "react";
import Layout from '@/components/layouts/Layout';
import router from "next/router";

export default function Edit({ params: { id } }: { params: { id: string } }) {

    const inputRef = useRef<HTMLInputElement>(null);

    const [inputValue, setInputValue] = useState("");

    // useEffect to retrieve the value from localStorage based on the provided id
    useEffect(() => {
        const storedValue = localStorage.getItem(id);
        if (storedValue) {
            setInputValue(storedValue);
        }
    }, [id]);



    localStorage.removeItem("task1")

    const handleEditTask = () => {
        if (inputValue.trim() !== "") {
            // Save the updated value to localStorage with the same id key
            localStorage.setItem(id, inputValue);

            console.log("Task updated in localStorage:", id, inputValue);

            setInputValue("");

            window.location.href = "/tasks";
        }
    };


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setInputValue(event.target.value);
    };

    return (
        <Layout>
            <ReturnButton page="Edit" />

            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="70vh"
            >
                <Box width="100%">
                    <Typography color="#262626" fontSize={18} fontWeight={700} fontFamily="Nunito">Task title</Typography>
                </Box>
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
                onClick={handleEditTask}
            >
                <Typography>Edit Task</Typography>
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
                onClick={handleEditTask}
            >
                <Typography>Edit Task</Typography>
            </Box>

        </Layout>
    );
}