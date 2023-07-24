"use client";
import { Box, Link, Typography } from '@mui/material'
import Header from '@/components/header/Header';
import React, { useEffect, useState } from 'react'
import Layout from '@/components/layouts/Layout';
import SubHeader from '@/components/subHeader/SubHeader';
import TaskCardChecked from '@/components/taskCardChecked/TaskCardChecked';
import TaskCardUnchecked from '@/components/taskCardUnchecked/TaskCardUnchecked';



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
            <SubHeader totalTasks={totalTasks} checkedTasksValue={checkedTasks.length} />
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




