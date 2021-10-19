import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import ArticleCard from './ArticleCard';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Dropdown } from 'semantic-ui-react';


class ShowArticle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            article: {},
            score: 0
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
        .get('https://sepersystem.herokuapp.com/api/articles/'+this.props.match.params.id)
        .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
            article: res.data
            })
        })
        .catch(err => {
            console.log("Error from ShowArticleDetails");
        })
    };
    
    handleInputChange(event){
        const target = event.target;
        const value =  target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
          });
    }
    
    handleSubmit(event){
        event.preventDefault();
        const theNewRate = parseFloat(( parseFloat(this.state.article.rateSum)+parseFloat(this.state.score))/(parseFloat(this.state.article.rateTimes)+parseFloat(1))).toFixed(2);
        const theNewRateSum = parseFloat(this.state.article.rateSum) + parseFloat(this.state.score);
        const theNewRateTimes = parseFloat(this.state.article.rateTimes) + parseFloat(1);
            const newRate = {
            
                rate:theNewRate,
                rateSum:theNewRateSum,
                rateTimes:theNewRateTimes,
          };
        
        if(this.state.score >= 0 && this.state.score <=5){
            axios
            .put('https://sepersystem.herokuapp.com/api/articles/'+this.props.match.params.id, newRate)
            .then(res => {
                  window.alert("The article has been rated successfully");
                  window.location.reload(false);
              })
            .catch(err => {
              console.log("Error in rate article!");
            })
        }else{
            window.alert("You have to choose rate the article from 0 to 5");
        }
        
        
    }

    render() {
        
    const article = this.state.article;
    let ArticleItem = <div>
        <table className="table table-hover table-dark">
        
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
            <td>Uploader</td>
            <td>{ article.uploader }</td>
            </tr>
            
            <tr>
            <th scope="row">5</th>
            <td>Description</td>
            <td>{ article.description }</td>
            </tr>

            <tr>
            <th scope="row">6</th>
            <td>Content</td>
            <td>{ article.content }</td>
            </tr>

            <tr>
            <th scope="row">7</th>
            <td>Awaiting process</td>
            <td>{ article.type }</td>
            </tr>

            <tr>
            <th scope="row">8</th>
            <td>Upload Date </td>
            <td>{ article.uploadDate }</td>
            </tr>

            <tr>
            <th scope="row">9</th>
            <td>Rating: </td>
            <td>{ parseFloat(article.rate).toFixed(2) }</td>
            </tr>

        </tbody>
        </table>
    </div>

    return (
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
        <div className="ShowBookDetails">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 m-auto">
                    <br /> <br />
                    <Link to="/" className="btn btn-outline-warning float-left">
                        Main page
                    </Link>
                </div>
                <br />
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Article's Record</h1>
                        <p className="lead text-center">
                            View Article's Info
                        </p>
                        <hr /> <br />
                        <div>
                        { ArticleItem }
                        </div>
                       
                            <label>
                                <a>I would rate:</a>
                                <input
                                    name="score"
                                    type="number"
                                    value={this.state.score}
                                    onChange={this.handleInputChange} />
                                    
                            </label>
                            <button onClick={this.handleSubmit}> rate article</button>
                            
                            
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );
    }
}
export default ShowArticle;