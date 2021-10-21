import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Dropdown } from 'semantic-ui-react'
//import mainPagePicture0 from "./mainPagePicture0.png";   <img src={mainPagePicture0}/>

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
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
                    <Nav className="mr-auto" >
                    <Nav.Link  href="/">Home</Nav.Link>
                    <Nav.Link  href="/search">Search</Nav.Link>
                    <Nav.Link  href="/upload">Upload</Nav.Link>
                    <Nav.Link  href="/moderator">Moderator</Nav.Link>
                    <Nav.Link  href="/analyzer">Analyzer</Nav.Link>

                    </Nav>
                    <div onClick={this.profileClick}>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>F</Avatar>   
                    </div>
                    <div>
                        <Dropdown text='Settings'>
                            <Dropdown.Menu>
                            <Dropdown.Item text='Edit profile' />
                            <Dropdown.Item text='Logout' />
                            </Dropdown.Menu>
                        </Dropdown>
                        
                    </div>
                </Container>
            </Navbar>
                

            <h1 style={centerlize}>Software Engineering Practice Evidence Repository</h1>
           
            
            
        </>
        );
    }
}

export default MainPage;