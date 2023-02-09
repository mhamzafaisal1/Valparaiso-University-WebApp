import Image from 'next/image'
import React from 'react'
import { Card, CardHeader, CardActions, CardContent, CardMedia, Button, Typography, Divider, Collapse, Avatar, IconButton, IconButtonProps } from '@mui/material'

import img from '../images/download.png'
import ValpoData from '@/props/props_Data'

interface CardProps {
 vdata: ValpoData
}
const CardComponent = ({vdata}: CardProps) => {
  return (
    <div className='cardBodyContainer'>
      <Card sx={{ minHeight: 400, maxWidth: 345, background: '#ffcc00', margin: '20px' }}>
        <CardMedia sx={{ height: 140 }} title="Valpo image">
        <Image src={vdata.image} alt="Valpo image" width={400} height={200} style={{marginTop: '0px'}} />
        </CardMedia>
        <Avatar sx={{ width: 56, height: 56, marginLeft: '20px' }}>
        <Image src={img} alt="Valpo image" width={75} height={75} style={{marginTop: '20px'}} />
        </Avatar>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {vdata.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {vdata.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='btnCard' variant='contained' size="small">Share</Button>
        <Button className='btnCard' variant='contained' size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default CardComponent