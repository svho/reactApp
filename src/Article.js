import React, { Component } from 'react';

class Article extends Component {
  
  render() {
    return (
      <div>
          <h1>Article {this.props.params.id}</h1>
      </div>
    );
  }
}

export default Article;
