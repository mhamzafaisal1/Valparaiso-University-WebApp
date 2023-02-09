import React from 'react'
import { Container, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, Divider } from '@mui/material'

import Hero from './Hero'
import Footer from './Footer'

const Layout = () => {
  return (
      <>
          <Container className='container' maxWidth="lg">
              <Divider>This is the start of the homepage Component</Divider>
                <Hero />
            <Divider>This is the end of the homepage Component</Divider>
              
          </Container>
          <Footer />
    </>
  )
}

export default Layout