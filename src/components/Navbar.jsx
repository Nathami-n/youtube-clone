import React from 'react'
import { Stack} from '@mui/material'
import { Link} from 'react-router-dom'
import { YouTube } from '@mui/icons-material'
import {SearchBar} from './'

const Navbar = () => {
  return (
    <Stack 
    direction='row'
    justifyContent= 'space-between' 
    alignItems= 'center'
    p = {1} 
    sx = {
      {
        position: 'sticky', 
        top: 0,
        background: 'black',
      }
    }
     >
      <Link to='/' sx ={{display: 'flex', alignItems:'center'}} >
      <YouTube sx={{color: 'red', fontSize: '45px'}}/>
      </Link>
      <SearchBar/>
       
    </Stack>
    
    )
}

export default Navbar