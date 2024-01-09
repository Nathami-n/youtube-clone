import React from 'react'
import { Stack} from '@mui/material'
import { Link} from 'react-router-dom'
import { YouTube } from '@mui/icons-material'
import {SearchBar} from './'

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent= 'space-between' alignItems= 'center' p={1}>
      <Link to='/' >
      <YouTube sx={{color: 'red', fontSize: '35px'}}/>
      </Link>
      <SearchBar/>
    </Stack>
    
    )
}

export default Navbar