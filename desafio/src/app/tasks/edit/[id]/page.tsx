"use client";

import ReturnButton from "../../../../components/returnButton/ReturnButton";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import React, { useEffect, useRef, useState } from "react";
import Layout from '@/components/layouts/Layout';
import { StandardButton } from "@/components/standardButton/StandardButton";

export default function Edit({ params: { id } }: { params: { id: string } }) {

    const inputRef = useRef<HTMLInputElement>(null);

    const [inputValue, setInputValue] = useState("");


    useEffect(() => {
        const storedValue = localStorage.getItem(id);
        if (storedValue) {
            setInputValue(storedValue);
        }
    }, [id]);



    localStorage.removeItem("task1")

    const handleEditTask = () => {
        if (inputValue.trim() !== "") {

            localStorage.setItem(id, inputValue);

            console.log("Task updated in localStorage:", id, inputValue);

            setInputValue("");

            window.location.href = "/tasks";
        }
    };
    const handleRemoveTask = () => {

        localStorage.removeItem(id);
        setInputValue("");
        window.location.href = "/tasks";

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
                height="55vh"
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

            <StandardButton onClick={handleEditTask} label="Edit Task" />

            <StandardButton onClick={handleRemoveTask} label="Remove Task" color="red" />
        </Layout>
    );
}