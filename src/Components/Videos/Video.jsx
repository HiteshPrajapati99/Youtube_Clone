import Loader from "../Loaders/Loader"
import { Stack, Box } from "@mui/material"
import VideoCard from "./VideoCard";
import ChannelCard from "../Channel/ChannelCard";

export default function Video({ videos, direction, channel }) {

  console.log(channel);

  if (videos.length === 0) return <Loader />;

  return (
    <Stack direction={direction || "row"}
      flexWrap="wrap" justifyContent="start" alignItems="start"
      gap={2}
    >
      {
        videos.map((items, indx) => {

          return (
            <Box key={indx}>
              {items.id.videoId && <VideoCard items={items} />}
              {/* {channel && <ChannelCard channelDetail={channel} />} */}
            </Box>
          )
        })
      }

    </Stack>
  )
}
