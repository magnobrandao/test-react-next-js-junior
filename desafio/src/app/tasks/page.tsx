"use client";
import { Avatar, Box, Button, Link, Typography } from '@mui/material'
import { Nunito } from 'next/font/google';
import Checkbox from '@mui/material/Checkbox';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Header from '@/components/header/Header';
import React, { useEffect, useState } from 'react'
import Layout from '@/components/layouts/Layout';
import TaskCard from '@/components/taskCard/TaskCardChecked';
import TaskCardChecked from '@/components/taskCard/TaskCardChecked';
import TaskCardUnchecked from '@/components/taskCard/TaskCardUnchecked';

export default function Tasks() {
    const [tasks, setTasks] = useState<{ [key: string]: boolean }>({});
    const [taskKeys, setTaskKeys] = useState<string[]>([]);

    const fetchTasksFromLocalStorage = () => {
        const tasksFromLocalStorage: { [key: string]: boolean } = {};
        const taskKeysFromLocalStorage: string[] = [];

        for (const key of Object.keys(localStorage)) {
            if (key.startsWith("task")) {
                const task = localStorage[key];

                tasksFromLocalStorage[task] = false;

                taskKeysFromLocalStorage.push(task);
            }
        }
        setTasks(tasksFromLocalStorage);
        setTaskKeys(taskKeysFromLocalStorage);
    };

    useEffect(() => {
        fetchTasksFromLocalStorage();
    }, []);

    const handleTaskToggle = (task: string) =>
        setTasks((prevState) => ({
            ...prevState,
            [task]: !prevState[task],
        }));

    const checkedTasks = taskKeys.filter((task) => tasks[task]);
    const uncheckedTasks = taskKeys.filter((task) => !tasks[task]);


    const totalTasks = taskKeys.length;

    return (
        <Layout>
            <Header />
            <Box display="flex" justifyContent="space-between">
                <Box>
                    <Typography fontSize={24} fontWeight={700} fontFamily="Nunito" color="#262626">Task</Typography>
                    <Typography fontSize={24} fontWeight={700} fontFamily="Nunito" color="#262626">List</Typography>
                </Box>
                <Box alignSelf="end" fontSize={14} fontFamily="Nunito" fontWeight={700} color="#7F00FF">
                    {checkedTasks.length}/{totalTasks} Task finished{" "}
                </Box>

            </Box>
            <Box
                mt="20px"
                color="white"
                borderRadius="10px"
                bgcolor="#a401ff"
                marginBottom="20px"
            >

                {checkedTasks.map((task, index) => (
                    <TaskCardChecked
                        key={index}
                        title={task}
                        onChange={() => handleTaskToggle(task)}
                    />
                ))}
            </Box>

            <Box bgcolor="#fafafa" borderRadius="10px">
                {uncheckedTasks.map((task, index) => (
                    <TaskCardUnchecked
                        key={index}
                        title={task}
                        onChange={() => handleTaskToggle(task)}
                    />
                ))}
            </Box>



            <Box marginTop="auto">
                <Link href="/tasks/add" underline="none">
                    <Box
                        mt="10px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        height="76px"
                        bgcolor="#a401ff"
                        color="white"
                        borderRadius="8px"


                    >
                        <Typography>Create Task</Typography>
                    </Box>
                </Link>{" "}
            </Box>
        </Layout>



    )
}




