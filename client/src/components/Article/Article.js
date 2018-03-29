import React from 'react';
import './Article.css';


const Article = (props) => (
    <div className="container">
       <h1>props.title</h1>
       <p>props.headline.main</p>
       <a href="/props.web_url">view article</a>
    </div>
) 
export default Article;