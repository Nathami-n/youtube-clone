import React, { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos} from "./";
import { FetchData } from "../assets/FetchData";

const Feed = () => {
  const [toogledCategory, setToogledCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
     FetchData(`search?part=snippet&q=${toogledCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [toogledCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          height: {sx: 'auto'},
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          toogledCategory={toogledCategory}
          setToogledCategory={setToogledCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            color: "#fff",
            marginTop: 1.5,
          }}
        >
          Copyright @2024 NATHAN GEORGE
        </Typography>
      </Box>
      <Box 
      p={2}
      sx={{
        overflowY: 'auto', 
        height: '90vh',
        flex: 2,
        
      
      }}>
      <Videos videos={videos} />
      </Box>
      
    </Stack>
  );
};

export default Feed;
