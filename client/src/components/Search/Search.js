import React, {Component} from 'react';
import './Search.css';
import API from "../../utils/API";

class Search extends Component {
  
  state= {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  saveArticleSubmit = (headline, link, date) => {
    console.log("Working");
      API.saveArticle({
        headline: headline,
        link: link,
        date: date
      })
        .then(res => console.log("saved article"))
        .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (

  <div className="card">
    <div className="card-header">
        <form>
          <div className="form-group">
            <label>Topic</label>
            <input 
              onChange={this.handleInputChange}
              value={this.state.topic}
              type="text"
              name="topic"
              placeholder="Enter Topic" 
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Start Year</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.startYear}
              type="text"
              name="startYear"
              placeholder="Start Year"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>End Year</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.endYear}
              type="text"
              name="endYear"
              placeholder="End Year"
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onChange={this.state.handleFormSubmit}
          >Get Articles</button>
      </form>
    </div>
  </div>
    )
  }
}
export default Search;