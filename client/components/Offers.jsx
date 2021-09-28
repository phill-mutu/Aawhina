import React, { useState, useEffect } from 'react'
import { Container, Typography, Box, Card, Grid, Chip, Button, CardContent, Stack } from '@mui/material'
import { connect } from 'react-redux'
import RequestCard from './RequestCard';

function Offers ({ currentUser, offers }) {

  const offersToShow = currentUser ? offers.filter(offer => currentUser.id === offer.user_id) : offers

  return (
    <>
      <Container 
        component="main"
        maxWidth="md" 
      >
        {offersToShow.length > 0 
          ? <Box
          mt={4}>
            <Typography variant="h5" align="center">
              These are the neighbours you've offered to help:
            </Typography>
          </Box> 
          : null 
        }
        <Box mt={2}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            aligncards="stretch"
            rowSpacing={2} 
          >
            { offersToShow && offersToShow.map(offer => <RequestCard request={offer} key={offer.id} />)}
            <Grid 
              item
              my={2}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Button 
              value='requests'
                variant="contained"
                size="large"
                href="/requests"
              >
                Explore requests for help
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>)
}

function mapState2Props (globalState) {
  return {
    offers: globalState.offers,
    requests: globalState.requests,
    users: globalState.users
  }
}

export default connect(mapState2Props)(Offers)
