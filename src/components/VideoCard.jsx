import React from 'react'
import {Link} from 'react-router-dom'
import {Card, CardContent, Typography, CardMedia} from '@mui/material'

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
 
  return (
    <Card  sx={{
      width: {xs: '100%', sm: '358px', md: '320px'},
      boxShadow: 'none',
      borderRadius: 0,
    }}>
        <Link to = '/'>
        <CardMedia  image ={snippet?.thumbnails?.high?.url} alt={snippet?.title}
        sx={{
          width: {xs: '100%', sm:'358px'},
          height: 180,
        }}
        />
        </Link>
    </Card>
  )
}

export default VideoCard