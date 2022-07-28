import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Link as MaterialLink, MenuItem} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const pages = ["Flashcards"]

// props- a concept in react of supplying statements to subcomponents

//What is conditional Rendering??
//  change what is rendering based on some kind of condition
export default function Navbar({user}) {

   // console.log(props);
   // return <h1>Hello (props.user.name) Welcome to Flashbash</h1>


   // if the user exists render one thing
   // if they don't render something different
   //if(props.user) {
   // return <h1>Hello {props.user.name}!</h1>    
   // } else {
   //     return <h1>Please log in !! :D</h1>
   // }
   
   // typically, React devs use ternary based conditional 
   // syntax: return <condition> ? <truthy> : <falsey>
    return user ?
    <AuthNavbar /> : 
    <h1>Please log in!! :D</h1>
}

// this component is rendered if the user logged in
function AuthNavbar() {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <MenuItem onClick ={() => navigate("/")}>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1 }}>
                    FlashBash 
                    </Typography>
                </MenuItem>

                
              
                 {pages.map((page) => (
                <MenuItem key = {page} onClick= {() => navigate (`/${page.toLowerCase()}`)}>
                    <Typography textAlign="center">{page} </Typography>
                </MenuItem>
                ))}
                </Toolbar>
            </AppBar>
        </Box>
    )

}

// this component is rendered if the user is not logged in
function NoAuthNavBar() {
    return <h1>Please log in!! :D</h1>

}