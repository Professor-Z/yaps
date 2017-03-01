import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="header">
          <h2>vuuihc 的个人网站</h2>
        </div>
        <div className="container">
          <a href="//blog.vuuihc.com">博客</a>
          <a href="//portfolio.vuuihc.com">作品</a>
          <a href="//resume.vuuihc.com">简历</a>
        </div>
      </div>
    );
  }
}

export default App;
