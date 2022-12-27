import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Box, Stack, Typography } from '@mui/material';
import axios from "axios";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Video from './Video';

export default function VideoDatails() {

    const { id } = useParams();

    const [VideoDatais, setVideoDatais] = useState([])
    const [ReletedVideos, setReletedVideos] = useState([])

    useEffect(() => {
        // Original Video
        const uri = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&maxResults=5&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        axios.get(uri).then((res) => {
            setVideoDatais(res.data.items[0])
        })



        // Recomended Videos
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&maxResults=3&type=video&safeSearch=none&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        axios.get(url).then((res) => setReletedVideos(res.data.items))
    }, [id])



    return (
        <Box minHeight="95vh">
            <Stack direction={{ xs: "column", md: "row" }} >
                <Box flex={1}>
                    <Box sx={{ width: { xs: "88%", md: "95%" }, position: "sticky" }} ml={3} mt={2}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className="react-player" />
                        <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                            {VideoDatais?.snippet?.title}
                        </Typography>
                        <Stack direction="row" justifyContent="space-between" >
                            <Link to={`/channel/${VideoDatais?.snippet?.channelId}`}>

                                <Typography variant="h5" fontWeight="bold" ml={2} color="#fff" >
                                    {VideoDatais?.snippet?.channelTitle}
                                    <CheckCircleIcon sx={{ fontSize: "15px", color: "gray", ml: "10px" }} />
                                </Typography>
                            </Link>
                            <Stack direction="row" gap={2} alignItems="center" sx={{ opacity: "0.7" }}>
                                <Typography variant='body1' color="#fff">
                                    <VisibilityIcon sx={{ fontSize: '15px' }} /> Views {VideoDatais?.statistics?.viewCount}
                                </Typography>
                                <Typography variant='body1' color="#fff">

                                    <ThumbUpIcon sx={{ fontSize: '15px' }} /> Likes {VideoDatais?.statistics?.likeCount}
                                </Typography>
                            </Stack>

                        </Stack>
                    </Box>
                </Box>
                <Box justifyContent="center" alignItems="center" px={2} py={{ md: 1, xs: 5 }}  >
                    <Video videos={ReletedVideos} direction="column" />
                </Box>
            </Stack>
        </Box>
    )
}
