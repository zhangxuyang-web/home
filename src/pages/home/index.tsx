import React from 'react';
import './index.scss';

export default class Home extends React.Component {
  goDocs() {
    window.location.href = 'https://zhangxuyang-web.github.io/docs'
  }
  render() {
    return (
      <div id="home">
        <div className="content">
          <h2>Welcome!</h2>
          <h6>张栩瑒的个人主页</h6>
          <div className="btn">个人博客</div>
          <div className="btn"  onClick={this.goDocs.bind(this)}>前端知识</div>
        </div>
      </div>
    );
  }
}
