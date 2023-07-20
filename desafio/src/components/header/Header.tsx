import { Box, Typography, Avatar } from '@mui/material';
import React from 'react'

function Header() {
    const today = new Date();
    const dayOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const formattedDayOfWeek = dayOfWeek[today.getDay()];
    const formattedDate = `${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()};`

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <Box display="flex" justifyContent="space-between">
            <Box>
                <Typography fontSize={18} fontWeight={700} fontFamily="Nunito" color="#a401ff">{formattedDayOfWeek}</Typography>

                <Typography fontFamily="Nunito" fontSize={12} fontWeight={600} color="#4A4A4A">
                    {formattedDate}
                </Typography>
            </Box>

            <Avatar src='/assets/images/profileImage.jpg'></Avatar>
        </Box>
    )
}

export default Header