import React from 'react'
import { Box, Stack,Typography } from '@mui/material'
import '../css/search.css'

const Search = () => {
  return (
    <Box class='mt-5 mb-5 pt-5 pb-5'>
      <Typography color='white' fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
          Awesome Exercises You <br /> Should Know
      </Typography>
      <div class="rela container text-center">
        <div class="row row-cols-2">
            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <input id='value-gpt' placeholder="Search Exercises"/>
            </div>
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
              <button id='btn-gpt'>
                Search
              </button>
            </div>
            <div class=' mt-5 pt-5 text-area'>

            </div>
        </div>
      </div>
    </Box>
  )
}

export default Search


{/* <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack> */}