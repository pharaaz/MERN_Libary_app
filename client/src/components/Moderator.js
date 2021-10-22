import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import ArticleModeratorCard from './ArticleModeratorCard';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Dropdown } from 'semantic-ui-react';
import mainPagePicture0 from "./mainPagePicture0.png";  

class Moderator extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            isbn: '',
            author: '',
         
            articles:[]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleIsbnChange = this.handleIsbnChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
       
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({title: event.target.value});
      }
      
      handleIsbnChange(event){
        this.setState({isbn: event.target.value});
      }

      handleAuthorChange(event){
        
        this.setState({author: event.target.value});
      }

      handleSubmit(event) {
        event.preventDefault();
       
        axios
            .get(' https://sepersystem.herokuapp.com/api/articles/moderatorSearch/'+this.state.title+ '&' +this.state.isbn + '&'+this.state.author)
        .then(res => {
          this.setState({
            articles: res.data
          });
         
        })
        .catch(err =>{
          console.log('Error from moderator search');
        })
      }
      render() {
        const articles = this.state.articles;
        let articleList;
        const bigFont = {
          fontSize: 24,
        };
        const marginLeft={
          marginLeft:6,
        }
        const centerlize={
          "text-align": "center",
        }
        if(!articles) {
            articleList = "there is no article record!";
        } else {
          articleList = articles.map((article, k) =>
            <ArticleModeratorCard article={article} key={k} />
          );
        }
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
                            <Dropdown.Item text='Edit profile' />
                            <Dropdown.Item text='Logout' description='logout' />
                            </Dropdown.Menu>
                        </Dropdown>
                        
                    </div>
                </Container>
            </Navbar>
            <h3 style={centerlize}>Moderator page </h3>

              <form style={centerlize} onSubmit={this.handleSubmit}>
                  <label>
                   
                    
                        
                        <a style={bigFont}>Article Title:</a>
                        <textarea className="col-lg-3" value={this.state.title} onChange={this.handleChange} />
                     
                   
                        <a style={bigFont}>Isbn:</a>
                        <textarea className="col-lg-3" value={this.state.isbn} onChange={this.handleIsbnChange} />
             
               
                        <a style={bigFont}>Author:</a>
                        <textarea  className="col-lg-3" value={this.state.author} onChange={this.handleAuthorChange} />
                 
                   
                      
                  </label>
                    
                 
                  <input style={marginLeft}  type="submit" value="submit" />
              </form>
                
          

              <div className="list">
                    {articleList}
                    
              </div>
              
              <img src={mainPagePicture0}/>

            </>
          
        );
      }

}
export default Moderator;
