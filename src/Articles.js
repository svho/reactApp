import React, { Component } from 'react';
import Article from './Article';

class Articles extends Component {
  render() {
    return (
      <div>
          <h1>Articles</h1>
          <div>
            <Article/>
          </div>
      </div>
    );
  }
}

export default Articles;
