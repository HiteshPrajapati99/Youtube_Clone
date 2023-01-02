import React from 'react'
import { Box, CardContent, CardMedia, Typography } from "@mui/material"

export default function ChannelCard({ channelDetail }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "350px", md: "320px" },
        height: "200px"
      }} >
      <CardContent sx={{ color: "#fff" }} >
        <CardMedia image={`ChannelData.snippet.thumbnails.high.url`}
          sx={{ borderRadius: "50%", width: "180px", height: "18px" }}
        />
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant="h6" ml={2}>
          {channelDetail?.snippet?.title}
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {channelDetail?.statistics?.subscriberCount} Subscribers
          </Typography>
        )}

      </CardContent>
    </Box>
  )
}
