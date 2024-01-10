import { Stack, Box } from '@mui/material'
import React from 'react'
import {VideoCard} from './'

const Videos = ({videos}) => {
   
  return (
    <Stack direction = 'row' flexWrap= 'wrap' justifyContent= 'start' alignItems='start' sx={{
      gap: 2,
    }}>
      {videos.map((video, id)=> {
        return <Box key = {id}> <VideoCard video = {video}/></Box>
      })}
    </Stack>
   
  )
}

export default Videos