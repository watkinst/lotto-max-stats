import React from 'react';

require('../../../../sass/navigation.scss');

export default class Navigation extends React.Component {
  render() {
    return (
    	<nav className="navbar navbar-primary navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">LottoMaxStats.com</a>
          </div>          
          <div className="collapse navbar-collapse" id="navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="/">Link <span className="sr-only">(current)</span></a></li>
              <li><a href="/">Link</a></li>              
            </ul>            
          </div>
        </div>
      </nav>
    );
  }
}