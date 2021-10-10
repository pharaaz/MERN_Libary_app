import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ArticleCard = (props) => {
    const  article  = props.article;

    return(
        <div className="card-container">
            <div className="desc">
                <h2>
                    <Link to={`/show-book/${article._id}`}>
                        { article.title }
                    </Link>
                </h2>
                <h3>{article.author}</h3>
                <p>{article.description}</p>
            </div>
        </div>
    )
};

export default ArticleCard;