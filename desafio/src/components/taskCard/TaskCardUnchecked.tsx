

import { Box, Checkbox, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useState } from "react";
import Link from 'next/link';
import router, { useRouter } from 'next/router';






interface CardProps {
    title: string;
    onChange: () => void;

}



const TaskCardUnchecked: React.FC<CardProps> = ({ title, onChange }) => {

    function getKeyByValue(value: string) {
        // Obtém todos os itens do localStorage como um array de objetos { chave: valor }
        const allItems = Object.entries(localStorage);

        // Itera pelos itens para encontrar a chave que possui o valor desejado
        for (let i = 0; i < allItems.length; i++) {
            const key = allItems[i][0];   // Obtem a chave do item atual
            const storedValue = allItems[i][1];   // Obtem o valor do item atual

            if (storedValue === value) {
                return key; // Retorna a chave quando encontrar o valor desejado
            }
        }

        return null; // Retorna null se o valor não for encontrado em nenhuma chave
    }


    const valueToFind = title;
    const idEdit = getKeyByValue(valueToFind);


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

            <Link href={`/pages/${idEdit}`} passHref>
                {/* Passe o `idEdit` como parâmetro na rota dinâmica */}
                <ArrowForwardIosIcon sx={{ color: "#000", cursor: "pointer" }} />
            </Link>

        </Box >
    );
};

export default TaskCardUnchecked;
