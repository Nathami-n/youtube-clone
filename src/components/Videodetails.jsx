import React, { useState, useEffect } from "react";
import { Typography, Box, Stack } from "@mui/material";
import {useParams } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReactPlayer from "react-player";

import { FetchData } from "../assets/FetchData";
import { Videos, Loader } from "./";

const Videodetails = () => {
  const [videoData, setVideoData] = useState({});
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    FetchData(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoData(data.items[0]);
    });

    FetchData(`videos?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [id]);
  console.log(videos);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className="react-player"
            />
            <Typography
              variant="h4"
              p={3}
              sx={{
                color: "white",
              }}
            >
              {videoData?.snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "white" }}
            >
              <Typography sx={{ color: "#fff" }}>
                {videoData?.snippet?.channelTitle}
                <CheckCircleIcon
                  sx={{ fontSize: "13px", color: "gray", ml: "5px" }}
                />
              </Typography>
              <Stack direction="row" alignItems="center" gap="22px">
                <Typography>
                  {parseInt(videoData?.statistics?.viewCount).toLocaleString(
                    "en-US"
                  )}{" "}
                  views
                </Typography>
                <Typography>
                  {parseInt(videoData?.statistics?.likeCount).toLocaleString(
                    "en-US"
                  )}{" "}
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        {/* <Box>
          <Videos videos={videos} direction="column" />
        </Box> */}
      </Stack>
    </Box>
  );
};

export default Videodetails;
