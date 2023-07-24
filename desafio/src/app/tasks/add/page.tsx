"use client";

import ReturnButton from "../../../components/returnButton/ReturnButton";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import React, { useRef, useState } from "react";
import Layout from '@/components/layouts/Layout';
import { StandardButton } from "@/components/standardButton/StandardButton";

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



            <StandardButton onClick={handleCreateTask} label="Create Task" />

        </Layout>
    );
}