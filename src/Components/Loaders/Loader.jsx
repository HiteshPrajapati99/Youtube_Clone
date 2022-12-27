import React from 'react'
import { Stack, Box, } from '@mui/material'

export default function Loader() {
  return (
    <Box>
      <Stack direction="row" justifyContent="center" alignItems="center" height="60vh">
        <span className="loader"></span>
      </Stack>
    </Box>
  )
}
