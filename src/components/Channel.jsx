import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { FetchData } from "../assets/FetchData";

const Channel = () => {
  const [channelDetail, setchannelDetail] = useState({});
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    FetchData(`channels?part=snippet&id=${id}`).then((data) => {
      setchannelDetail(data?.items[0]);
    });

    FetchData(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      setVideos(data?.items);
    });
  }, [id]);
  console.log(videos)
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,225,247,1) 0%, rgba(0,23,244,1) 100%)",
            zIndex: "10",
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p={2}>
        <Box
          sx={{
            mr: { sm: "100px" },
          }}
        />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default Channel;
