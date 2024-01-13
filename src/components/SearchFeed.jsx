import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {Videos} from "./";
import { FetchData } from "../assets/FetchData";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const searchTerm = useParams();
  useEffect(() => {
     FetchData(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box 
    p={2}
    sx={{
      overflowY: 'auto', 
      height: '90vh',
      flex: 2,
    }}>
    <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
