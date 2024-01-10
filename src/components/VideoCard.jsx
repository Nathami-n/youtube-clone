import React from 'react'
import {Link} from 'react-router-dom'
import {Card, CardContent, Typography, CardMedia} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
 console.log(snippet)
  return (
    <Card  sx={{
      width: {xs: '100%', sm: '358px', md: '320px'},
      boxShadow: 'none',
      borderRadius: 0,
    }}>
        <Link to={`/videos/${videoId}`} >
        <CardMedia  image ={snippet?.thumbnails?.high?.url} alt={snippet?.title}
        sx={{
          width: {xs: '100%', sm:'358px'},
          height: 180,
        }}
        />
        </Link>
        <CardContent sx={{
          background: '#000', 
          color: '#fff',
        }}>
          <Link>
          <Typography variant='h7'sx={{
            fontSize: '1.2em',
            color: 'white',
            fontWeight: 'bold',
          }}>
            {snippet?.title.slice(0, 80)}
          </Typography>
          </Link>
          
          <Link>
          <Typography sx={{
            color: '#fff'
          }}>
          {snippet?.channelTitle}
          <CheckCircleIcon sx={{
            color: 'gray',
            fontSize: '15px',
            ml: '5px',
            mt: '5px',
          }}/>
          </Typography>
          </Link>

        </CardContent>
        
    </Card>
  )
}

export default VideoCard