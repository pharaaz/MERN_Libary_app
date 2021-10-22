import React, { Component } from 'react';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Dropdown } from 'semantic-ui-react'
import mainPagePicture0 from "./mainPagePicture0.png";   

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
           
            
            <img src={mainPagePicture0}/>
        </>
        );
    }
}

export default MainPage;