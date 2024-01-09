import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import { Navbar, Feed, Videodetails, Channel , SearchFeed } from './components'
import './app.css'


const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{
      backgroundColor: '#000'
    }}>
      <Navbar/>
      <Routes>
        <Route exact path='/' element = {<Feed/>}></Route>
        <Route exact  path = '/video/:id'  element = {<Videodetails/>} ></Route>
        <Route exact path='/Channel/:id' element = {<Channel/>} ></Route>
        <Route exact path='/search/:searchTerm' element = {<SearchFeed/>} ></Route>

      </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App