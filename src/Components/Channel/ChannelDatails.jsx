import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import Video from "../Videos/Video";
import ChannelCard from "./ChannelCard";

export default function ChannelDatails() {

    const [ChannelDatails, setChannelDatails] = useState([])
    const [Videos, setVideos] = useState([])

    const { id } = useParams();

    useEffect(() => {

        // channel
        const uri = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        axios.get(uri).then((res) => {
            setChannelDatails(res.data.items[0])
        })

        // videos
        const url = `https://www.googleapis.com/youtube/v3/search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        axios.get(url).then((res) => {
            setVideos(res.data.items)
        })


    }, [id])

    return (
        <Box minHeight="95vh">
            <Box>
                <div
                    style={{
                        height: '200px',
                        background: "rgb(238,174,202)",
                        background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(155,148,233,1) 100%)"
                    }}
                >
                    <Box display="flex" justifyContent="center"
                        sx={{ position: 'relative', top: '100px' }}
                        alignItems="center"  >
                        <ChannelCard channelDetail={ChannelDatails} />
                    </Box>
                </div>

            </Box>

            <Box p={2} display="flex" justifyContent="center" mt="7rem">
                <Box>
                    <Video videos={Videos} />
                </Box>

            </Box>
        </Box>

    )
}
