import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../../utils/Category'

export default function Slidebar({ Selectcategory, setSelectcategory }) {

  return (
    <Stack direction="row"
      sx={{
        overflow: "auto",
        height: { sm: "auto", md: "85%" },
        flexDirection: { md: "column" },
      }}
    >
      {
        categories.map((category) => {
          return (
            <button color='error' className='category-btn'
              onClick={() => setSelectcategory(category.name)}
              style={{ backgroundColor: category.name === Selectcategory && "#FC1503", color: '#fff', marginTop: '1rem', gap: '10px' }}
              key={category.name}>
              <span> {category.icon} </span>
              <span> {category.name} </span>
            </button>
          )
        })
      }


    </Stack>
  )
}
