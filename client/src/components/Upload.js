import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Dropdown } from 'semantic-ui-react';
import mainPagePicture0 from "./mainPagePicture0.png";


class Upload extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            isbn: '',
            author: '',
            description:'',
            content:'',
            uploader:'',
            type:'pending'
        }

    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSubmit = e => {
    e.preventDefault();

    const data = {
        title: this.state.title,
        isbn: this.state.isbn,
        author: this.state.author,
        description: this.state.description,
        content: this.state.content,
        uploader: this.state.uploader,
        type: this.state.type
    };

    axios
        .post(' https://sepersystem.herokuapp.com/api/articles/', data)
        .then(res => {
        this.setState({
            title: '',
            isbn:'',
            author:'',
            description:'',
            content:'',
            uploader:'',
            type:'pending'
        });
        this.props.history.push('/');
        })
        .catch(err => {
        console.log(err.response);
        console.log("Error in Create Article!");
        
        })
    };


    render() {
        return (
          
            <><Navbar bg="dark" variant="dark">
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
                            <Dropdown.Item text='Edit Profile' />
                            <Dropdown.Item text='Logout' />
                            </Dropdown.Menu>
                        </Dropdown>
                        
                    </div>
                </Container>
            </Navbar>
            

          <div className="CreateArticle">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Add Article</h1>
                  <p className="lead text-center">
                      Create new article
                  </p>
    
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className='form-group'>
                      <input
                        type='text'
                        placeholder='Title of the Article'
                        name='title'
                        className='form-control'
                        value={this.state.title}
                        onChange={this.onChange}
                      />
                    </div>
                    <br />
    
                    <div className='form-group'>
                      <input
                        type='text'
                        placeholder='ISBN'
                        name='isbn'
                        className='form-control'
                        value={this.state.isbn}
                        onChange={this.onChange}
                      />
                    </div>
    
                    <div className='form-group'>
                      <input
                        type='text'
                        placeholder='Author'
                        name='author'
                        className='form-control'
                        value={this.state.author}
                        onChange={this.onChange}
                      />
                    </div>
    
                    <div className='form-group'>
                      <input
                        type='text'
                        placeholder='Describe this article'
                        name='description'
                        className='form-control'
                        value={this.state.description}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='text'
                        placeholder='Input contents of the article'
                        name='content'
                        className='form-control'
                        value={this.state.content}
                        onChange={this.onChange}
                      />
                    </div>
    
                    
                    <div className='form-group'>
                      <input
                        type='text'
                        placeholder='Uploader of this Book'
                        name='uploader'
                        className='form-control'
                        value={this.state.uploader}
                        onChange={this.onChange}
                      />
                    </div>
    
                    <input
                        type="submit"
                        className="btn btn-outline-warning btn-block mt-4"
                    />
                  </form>
              </div>
              </div>
            </div>
          </div>

          <img src={mainPagePicture0}/>
          </>
        );
      }
}
export default Upload;
