import React from 'react'
import { Grid } from '@mui/material'

import CardComponent from './CardComponent'

import dvu from '../images/dvu.jpg'
import founders from '../images/founders.jpg'
import gelly from '../images/gelly.jpg'
import map from '../images/map.jpg'
import fitnesscenter from '../images/fitnesscenter.jpg'

const data = [{
    image: '/images/gelly.jpg',
    title: "Campus Buildings",
    description: "This is for the buildings on campus",
},
     {
        image: '/images/founders.jpg',
        title: "On-Campus Events",
        description: "This is a for the on-campus events",
        },
     {
        image: '/images/founders.jpg',
        title: "Founders Dining Hall and more",
        description: "This is a for food on campus",
        },
     {
        image: '/images/dvu.jpg',
        title: "Data VU",
        description: "This is a for Data VU",
        },
     {
        image: '/images/fitnesscenter.jpg',
        title: "Athletics and Fitness Center",
        description: "This is a for the Athletics and Fitness Center",
        },
     {
        image: '/images/map.jpg',
        title: "Campus Map",
        description: "This is a for the Campus Map",
    },
]

const Hero = () => {
  return (
      <div className='cardsContainer'>
          <Grid container spacing={3}>
              {data.map((indvdata) => (
              <Grid item  xs={4}>
         <CardComponent vdata={indvdata} />
              </Grid>  
              ))}
        </Grid>
    </div>
  )
}

export default Hero

 