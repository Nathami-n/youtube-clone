import { Stack, Box } from '@mui/material'
import React from 'react'
import {VideoCard, ChannelCard} from './'

const Videos = ({videos}) => {
   
  return (
    <Stack direction = 'row' flexWrap= 'wrap' justifyContent= 'start' alignItems='start' sx={{
      gap: 2,
    }}>
      {videos.map((video, id)=> {
        return <Box key = {id}> 
        {video.id.videoId && <VideoCard video = {video}/>}
        {video.id.channelId && <ChannelCard channelDetail = {video}/>}
        </Box>
      })}
    </Stack>
   
  )
}

export default Videos 