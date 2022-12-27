import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Feed,
  Heder,
  VideoDatails,
  SearchFeed,
  ChannelDatails,
} from "./Components";

import { Box } from "@mui/system";

export default function App() {
  return (
    <BrowserRouter>
      <Box bgcolor="#000">
        <Heder />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDatails />} />
          <Route path="Search/:SeacrchTerm" element={<SearchFeed />} />
          <Route path="channel/:id" element={<ChannelDatails />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
