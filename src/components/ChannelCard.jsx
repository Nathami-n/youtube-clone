import React from "react";
import { Box, Typography, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const ChannelCard = ({ channelDetail, marginTop }) => {
    console.log(channelDetail)
  return (
    <Box
    sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: {xs: '356px', md: '320px'},
        height: '326px',
        margin: 'auto',
        marginTop
    }}
    >
      <Link to = {`/Channel/${channelDetail?.id?.channelId}`}>
      <CardContent>
        <CardMedia
        image = {channelDetail?.snippet?.thumbnails?.high?.url}
        alt = {channelDetail?.snippet?.title}
        sx={{
            borderRadius: '50%',
            height: '180px',
            width: '180px', 
            border: '1px solid #e3e3e3', 
            mb: 2,
        }}
        />
        <Typography variant="h7">
            {channelDetail?.snippet?.title}
            <CheckCircleIcon sx={{
                fontSize: '15px', 
                color: 'gray',
                ml: '5px',
                mt: '5px',
            }}/>
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
            <Typography>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
            </Typography>
        )}
      </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
