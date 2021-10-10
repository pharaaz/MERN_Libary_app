import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const ArticleModeratorCard = (props) => {
    const  article  = props.article;
    const acceptedArticle = {
      
        type:'processing'
      };  
    const rejectedArticle = {
        type:'reject'
      };

    function handleAccept(){
        axios
        .put('https://sepersystem.herokuapp.com/api/articles/'+props.article._id, acceptedArticle)
        .then(res => {
              window.alert("The article has been added for further analysing list successfully");
              window.location.reload(false);
          })
        .catch(err => {
          console.log("Error in UpdateArticleInfo!");
        })
    }
    function handleDecline(){
        axios
      .put('https://sepersystem.herokuapp.com/api/articles/'+props.article._id, rejectedArticle)
      .then(res => {
            window.alert("The article has been removed from the pending queue");
            window.location.reload(false);
        })
      .catch(err => {
        console.log("Error in UpdateArticleInfo!");
      })
    }
    return(
        <>
        <div className="card-container">
            <div className="desc-lg">
                <h2>
                    <Link to={`/show-article/${article._id}`}>
                        Title :{ article.title }
                    </Link>
                </h2>
                <h3>Article :{article.author}</h3>
                <p>Description :{article.description}</p>
                <p>Uploader :{article.uploader}</p>
                <button onClick = {handleAccept}>
                    Accept
                </button>
                <button onClick = {handleDecline}>
                    Decline
                </button>
            </div>
        </div>
        </>
    )
};

export default ArticleModeratorCard;