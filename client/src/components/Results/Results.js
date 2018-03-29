import React from 'react';
import './Results.css';
import Article from '../Article'


const Results = (props) => (
  <div className="card">
  <div className="card-header">
    Featured
  </div>
  {this.props.articles.map(article => (
    <Article></Article>
  ))}
</div>
) 
export default Results;

