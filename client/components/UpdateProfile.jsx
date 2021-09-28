import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import { updateUserThunk } from '../actions/users'
import { getUsersThunk } from '../actions/users'
import LaunchData from '../components/LaunchData'

import Nav from './Nav'
import { useHistory } from 'react-router-dom'
import { getSuburbs} from '../apis/suburb_api'
import { Link } from 'react-router-dom'

import { autocompleteClasses } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl'
import { grey } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import ListSubHeader from '@mui/material/ListSubheader'

import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack'



function UpdateProfile (props)  {
  const { dispatch, currentUser } = props

  const [values, setValues] = useState({    
  first: currentUser.first_name,
  last: currentUser.last_name,
  bio: currentUser.bio,
})  
 

  useEffect(() => {
    getSuburbs()
    .then(res => setSuburbs(res)
    )
  },[])

  const [editing, setEditing] = useState(false)
  const [gender, setGender] = useState('')
  
  const [theSuburbs, setSuburbs] = useState([])
  
  const currentSuburb = theSuburbs.filter(s => s.id === currentUser.suburb_id).map(s => s.name)

//  const sub = currentUser.suburb_id
  const [newSuburb, setSuburb] = useState('')
  
  const handleSuburb = (e) => {
    e.preventDefault()
    setSuburb(e.target.value)
  }  
  
  const handleGender =(e) => {
    e.preventDefault()
    setGender(e.target.value)

  }  

  const handleChange =(e) => {
    e.preventDefault()
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })  

  }  

  let history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedUser = {
      id: currentUser.id,
      first_name: values.first,
      last_name: values.last,
      email: currentUser.email,
      suburb_id: newSuburb,
      bio: values.bio,
      gender: gender, 
      spoken_languages: currentUser.spoken_languages,
      image: currentUser.image
    }  

    console.log(updatedUser)
      dispatch(updateUserThunk(updatedUser)) 
      dispatch(getUsersThunk()) 
      // setEditing(false)
      history.push('/profile') 
      
    }
    
    
    
    const { first, last, bio } = values
    
    // <LaunchData />
    return (
      
      <>
    <Container sx={{ p: 2, margin: 'auto', mt: 10, width: '67.3vh', height: '70vh', flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Box>
          <Grid item sx={{ mt: 7}}>
          <Avatar
              alt="Profile picture"
              src={currentUser.image}
              border= "1px solid"
              sx={{ width: 110, height: 110 }}
              />
          </Grid>
          <Button sx={{ml: 1}}size="small">Edit Photo</Button>
        </Box>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div" fontSize="h5.fontSize">
                Update Profile
              </Typography>
              <Divider sx={{width: '23ch'}}/>

              <Stack sx={{ pr: 0 }}direction="row" justifyContent="">


                  <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '22ch' },
                  }}
                  noValidate
                  autoComplete="on"
                >
                    <TextField
                      label="First Name"
                      id="standard-size-small"
                      // defaultValue={currentUser.first_name}
                      size="small"
                      variant="standard"
                      name='first'
                      display='hellllllo'
                      value={first}
                      onChange={handleChange}
                    />
                </Box>

               
              <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '22ch' },
                  }}
                  noValidate
                  autoComplete="on"
                >
                    <TextField
                      label="Last Name"
                      id="standard-size-small"
                      autoComplete='lastnameplz'
                      defaultValue={currentUser.last_name}
                      size="small"
                      variant="standard"
                      name='last'
                      value={last}
                      onChange={handleChange}
                    />
                </Box>
              </Stack>

              <Stack sx={{ pl: 0, pr: 0 }}direction="row" justifyContent="centre">
              <Box>
                <FormControl variant="standard" sx={{ m: 1, width: '18ch' }}>
                <InputLabel>Gender</InputLabel>
                <Select
                  value={gender}
                  label='Gender'
                  // defaultValue={currentUser}
                  onChange={handleGender}
                  sx={{ width: '18ch' }}>
                  <MenuItem value='female'>Female</MenuItem>
                  <MenuItem value='male'>Male</MenuItem>
                  <MenuItem value='gender diverse'>Gender Diverse</MenuItem>
                  <MenuItem value='prefer not to say'>Prefer not to say</MenuItem>
                </Select>
                </FormControl>
              </Box>



              <Box>
              <FormControl variant="standard" sx={{ m: 1, width: '18ch' }}>
              <InputLabel>Suburb</InputLabel>
          <Select
            defaultValue=''
            onChange={handleSuburb}
            value={newSuburb}
            sx={{ width: '18ch' }}
            label='Suburb'
            >
             

            <ListSubHeader>Wellington</ListSubHeader>
            {theSuburbs && theSuburbs.filter(s => s.region === 'Wellington').map(s => ( 
            <MenuItem value={s.id}>{s.name}</MenuItem>
            ))}
            <ListSubHeader>Lower Hutt</ListSubHeader>
            {theSuburbs && theSuburbs.filter(s => s.region === 'Lower Hutt').map(s => (
            <MenuItem value={s.id}>{s.name}</MenuItem>
            ))}


            <ListSubHeader>Upper Hutt</ListSubHeader>
            {theSuburbs && theSuburbs.filter(s => s.region === 'Upper Hutt').map(s => (
            <MenuItem value={s.id}>{s.name}</MenuItem>
            ))}

            <ListSubHeader>Porirua</ListSubHeader>
            {theSuburbs && theSuburbs.filter(s => s.region === 'Porirua').map(s => (
            <MenuItem value={s.id}>{s.name}</MenuItem>
            ))}

          </Select>
              </FormControl>
              </Box>
          </Stack>

              <TextField sx={{ mt: 4 }}  
                fullWidth id = 'outlined-required' 
                multiline rows={6}  
                label = 'About me' 
                name='bio' 
                value={bio} 
                onChange={handleChange}/>
            </Grid>

            <Stack direction="row" item sx={{pt: 0}}>
              <Box sx={{ "& button": { ml: 2, p: 0 } }}>
                <>
                <Button size="small">Cancel</Button>
               <Button size="small" onClick={handleSubmit}>Save Changes</Button>
                </>
              </Box>
            </Stack>

          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    </>


  )}
  function mapState2Props (globalState) {
    return {
      currentUser: globalState.currentUser,
      suburb: globalState.suburb

    }  
  }
  

  export default connect(mapState2Props)(UpdateProfile) 
