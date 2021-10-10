import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Dropdown } from 'semantic-ui-react'
import mainPagePicture0 from "./mainPagePicture0.png";
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    //handle profile click, which should allow user to jump to profile page
    profileClick() {
        window.alert("you will be redirected to profile page");
    }
    logout(e) {
        window.alert("logging out!");

        console.log("Logging out");
    }
    render(){
        const centerlize={
            "text-align": "center",
          }
        return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand  href="/">SEPER</Navbar.Brand>
                    <Nav className="mr-auto" >
                    <Nav.Link  href="/">Home</Nav.Link>
                    <Nav.Link  href="/search">Search</Nav.Link>
                    <Nav.Link  href="/upload">Upload</Nav.Link>
                    <Nav.Link  href="/moderator">Moderator</Nav.Link>
                    <Nav.Link  href="/analyzer">Analyzer</Nav.Link>

                    </Nav>
                    <div onClick={this.profileClick}>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>   
                    </div>
                    <div>
                        <Dropdown text='User name'>
                            <Dropdown.Menu>
                            <Dropdown.Item text='Browse profile' />
                            <Dropdown.Item text='Edit profile' />
                            <Dropdown.Item text='Logout' description='logout' />
                            </Dropdown.Menu>
                        </Dropdown>
                        
                    </div>
                </Container>
            </Navbar>
                

            <h1 style={centerlize}>SEPER System</h1>
           
            
            <img src={mainPagePicture0}/>
        </>
        );
    }
}

export default MainPage;