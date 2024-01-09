import React, { useEffect, useState} from "react";
import { Stack, Box, Typography } from "@mui/material";
import {Sidebar, Video} from "./";

const Feed = () => {
  const [toogledCategory, setToogledCategory] = useState('New')
  useEffect(()=> {

  })

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          height: '92vh',
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar toogledCategory = {toogledCategory} setToogledCategory = {setToogledCategory}/>
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
      <Video />
    </Stack>
  );
};

export default Feed;
