import React, { useState } from 'react'
import { IconButton, Paper } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'



const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }


  }
  return (
    <Paper
    component='form'
    onSubmit={handleSubmit}
    sx={{
      borderRadius: 10,
      padding: '3',
      border: '1px solid #e3e3e3',
      boxShadow: 'none',
      display: 'flex',
      alignItems: 'center',
    }}

    >
      <input
       type="text"
       placeholder='Search'
       value = {searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
       />
       
       <IconButton 
       type='submit'
       sx={{
        p: '10px',
        color: 'red',
       }}
       aria-label='seach'
       >
        <Search/>
       </IconButton>
     
    </Paper>
  )
}

export default SearchBar