import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Typography } from "@mui/material"
import Video from '../Videos/Video'

export default function SearchFeed() {

  const [SearchVideos, setSearchVideos] = useState([])
  const { SeacrchTerm } = useParams()


  useEffect(() => {
    // const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=${SeacrchTerm}&safeSearch=none&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`

    // paid url
    const url = `https://youtube-v31.p.rapidapi.com/search?part=snippet&maxResults=10&type=video&q=${SeacrchTerm}`
    const options = {
      params: {
        maxResults: 50,
      },
      headers: {
        'X-RapidAPI-Key': "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA",
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    };

    axios.get(url, options).then((res) => {
      setSearchVideos(res.data.items)
    })
  }, [SeacrchTerm])

  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant='h3' color="#fff" mb={3}
      >
        Search Result For <span style={{ color: "#FC1503" }}> {SeacrchTerm} </span>
      </Typography>
      <Video videos={SearchVideos} />
    </Box>
  )
}
