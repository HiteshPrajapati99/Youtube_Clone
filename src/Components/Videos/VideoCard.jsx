
import React from 'react'
import { Card, Typography, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function VideoCard({ items }) {
  const { id, snippet } = items;

  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "350px", } }}>
      <Link to={`/video/${id.videoId}`}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: { xs: "150px", md: "120px" } }}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60)}
        </Typography>
        <Link to={`/channel/${snippet?.channelId}`}>
          <Typography fontWeight="900" color="rgb(252, 21, 3)" mt={1}>
            {snippet.channelTitle.slice(0, 30)}
            <CheckCircleIcon sx={{ fontSize: "15px", color: "grey", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}
