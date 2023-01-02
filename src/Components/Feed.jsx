
import { Box, Stack, Typography } from "@mui/material"
import React, { useState } from 'react'
import Slidebar from "./Navbar/Slidebar"
import axios from "axios"
import { useEffect } from "react"
import Video from "./Videos/Video"


export default function Feed() {

    const [Selectcategory, setSelectcategory] = useState("Home")
    const [Videos, setVideos] = useState([])

    useEffect(() => {
        // original 

        // const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=${Selectcategory}&safeSearch=none&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`

        //paid
        const url = `https://youtube-v31.p.rapidapi.com/search?part=snippet&maxResults=10&type=video&q=${Selectcategory}&safeSearch=none`
        const options = {
            params: {
                maxResults: 50,
            },
            headers: {
                'X-RapidAPI-Key': "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA",
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
            },
        };

        axios.get(url, options).then((res) => setVideos(res.data.items))

    }, [Selectcategory])

    return (
        <Stack sx={{ flexDirection: { sm: "column", md: "row" }, }} >

            <Box sx={{ height: { sx: "auto", md: "90vh" }, borderRight: '1px solid #fff', px: { sx: 0, md: 2 } }}>
                <Slidebar Selectcategory={Selectcategory} setSelectcategory={setSelectcategory} />
                <Typography variant="body2" sx={{ display: { xs: "none", md: "block" }, color: '#fff', mt: "1.5rem", pr: 5 }} >
                    @Hitesh Prajapati
                </Typography>
            </Box>

            <Box p={2} sx={{ flex: 2, height: "100%" }}>
                <Typography sx={{ color: "#fff" }} variant="h5" fontWeight="bold" pl={3} mb={2}>
                    <span style={{ color: '#FC1503' }}>  {Selectcategory}</span> videos
                </Typography>
                <Video videos={Videos} />
            </Box>
        </Stack>
    )
}
