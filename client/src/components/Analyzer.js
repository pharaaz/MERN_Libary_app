import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Dropdown } from 'semantic-ui-react';
import mainPagePicture0 from "./mainPagePicture0.png"; 

class Analyzer extends Component{

    constructor(props) {
      super(props);
      this.state = {
        article: {}
      };
      this.handleNextArticle = this.handleNextArticle.bind(this);
      this.handleAccepting = this.handleAccepting.bind(this);
      this.handleRejecting = this.handleRejecting.bind(this);
    }
    
     
    handleNextArticle(){
      axios
        .get('https://sepersystem.herokuapp.com/api/articles/findNextArticle')
        .then(res => {
          if(res.data != null){
            this.setState({
              article: res.data
              })
          }
          else{
            window.alert("no more article for analyzing currently!");
            window.location.reload(false);

          }})
        
        .catch(err => {
            console.log("Error from get Next Article");
        })
    }
   
     handleAccepting(){
        axios
        .put('https://sepersystem.herokuapp.com/api/articles/'+this.state.article._id, {type:'accepted'})
        .then(res => {
              window.alert("The article has been acceped and added for searching successfully");
              window.location.reload(false);
          })
        .catch(err => {
          console.log("Error in Accepting article joining library!");
        })
    }

    handleRejecting(){
      axios
        .delete('https://sepersystem.herokuapp.com/api/articles/'+this.state.article._id)
        .then(res => {
              window.alert("The article has been rejected and deleted from queue successfully");
              window.location.reload(false);
          })
        .catch(err => {
          console.log("Error in deleting article !");
        })
    }
    render(){
        const article = this.state.article;
        let ArticleItem = <div>
          <table className="table table-hover table-dark">
            {/* <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead> */}
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Title</td>
                <td>{ article.title }</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Author</td>
                <td>{ article.author }</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>ISBN</td>
                <td>{ article.isbn }</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Description</td>
                <td>{ article.description }</td>
              </tr>
              
              <tr>
                <th scope="row">5</th>
                <td>Content</td>
                <td>{ article.content }</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Uploader</td>
                <td>{ article.uploader }</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Upload date</td>
                <td>{ article.uploadDate }</td>
              </tr>
              
            </tbody>
          </table>
        </div>

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
                            <Dropdown.Item text='Logout' description='logout' />
                            </Dropdown.Menu>
                        </Dropdown>
                        
                    </div>
                </Container>
            </Navbar>
                

            <h1 style={{"text-align":"center"}}>SEPER System</h1>
            <button type="button" className="btn btn-outline-warning btn-lg float-right" onClick = {this.handleNextArticle}>
                Next article
            </button>
            
            <div className="container">
                <div className="row">
                    
                    <br />
                    <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Article's Record</h1>
                    <p className="lead text-center">
                        View Article's Info
                    </p>
                    <hr /> <br />
                    </div>
                </div>
                <div>
                { ArticleItem }
                </div>
            </div>    
            <div className="row">
                <div className="col-md-6">
                    <button type="button" className="btn btn-outline-info btn-lg btn-block" onClick = {this.handleAccepting}>Accept Request</button><br />
                </div>

                <div className="col-md-6">
                    <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick = {this.handleRejecting}>Decline Request</button><br />
                </div>

          </div>
          <img src={mainPagePicture0}/>
        </>
        );
    }
}
export default Analyzer;
