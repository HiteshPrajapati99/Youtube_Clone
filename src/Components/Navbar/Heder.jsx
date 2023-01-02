import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Stack, Paper, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

export default function Heder() {

  const navigate = useNavigate()

  const Logo = "https://i0.wp.com/fontlot.com/wp-content/uploads/2020/03/youtube-logo-font.jpg?fit=650%2C300&ssl=1"

  const [SeacrchTerm, setSeacrchTerm] = useState("")

  const hendlesubmit = (e) => {
    e.preventDefault()

    if (SeacrchTerm) {
      navigate(`/Search/${SeacrchTerm}`)

      setSeacrchTerm("")
    }

  }

  return (
    <Stack direction="row" p={2} alignItems="center" sx={{ position: "sticky", justifyContent: "space-between" }} >
      {/*    Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
        <img src={Logo} alt="Logo" width={90} />
      </Link>
      {/* search Bar  */}

      <Paper component="form"
        onSubmit={hendlesubmit}
        sx={{ pl: { xs: 0, md: 5 }, borderRadius: "0.3rem" }}>
        <input type="search" placeholder='Search' style={{ border: '0' }}
          value={SeacrchTerm}
          onChange={(e) => setSeacrchTerm(e.target.value)} />
        <IconButton type='submit'>
          <SearchIcon />
        </IconButton>
      </Paper>

    </Stack >
  )
}
