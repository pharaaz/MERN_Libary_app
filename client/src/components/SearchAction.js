//perform search article action
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import ArticleCard from './ArticleCard';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

class SearchAction extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            filter: 'A'
        }
    
        this.handleChange = this.handleChange.bind(this);
        //TypeError: Cannot read properties of undefined (reading 'setState')
        //when meeting such error, means we will need to bind the handle function
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleFilterChange(event) {
        this.setState({filter: event.target.filter});
      }


      handleSubmit(event) {
        event.preventDefault();
        var searchQuery = this.state.value;
        var filterValue = this.state.filter;
        window.location.href = "/show-research-list";
        // + searchQuery;
        // + filter;
      }

    
      render() {
        return (
            <><Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand  href="/">SEPER</Navbar.Brand>
                    <Nav className="mr-auto" >
                    <Nav.Link  href="/">Home</Nav.Link>
                    <Nav.Link  href="/search">Search</Nav.Link>
                    <Nav.Link  href="/">Upload</Nav.Link>
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
              <form onSubmit={this.handleSubmit}>
                  <label>
                      search content:
                      <textarea value={this.state.value} onChange={this.handleChange} />
                      <select value={this.state.filter} onChange={this.handleFilterChange}>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                      </select>
                  </label>
                  <input type="submit" value="submit" />
              </form>
            </>
          
        );
      }
}

export default SearchAction;