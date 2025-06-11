import React from 'react';
import { NavLink } from "react-router-dom";

require('../../../../sass/navigation.scss');

export default class Navigation extends React.Component {

  componentDidMount() {
    $(document).on('click','.navbar-collapse.in',function(e) {
      if($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
          $(this).collapse('hide');
      }
    });
  }

  render() {
    const { location } = this.props.location;
    const homeClass = (location.pathname === "/") ? "active" : "";
    const faqClass= (location.pathname === "faq") ? "active" : "";

    return (
    	<nav className="navbar navbar-inverse navbar-fixed-top">
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
              <li className={ homeClass }>
                <NavLink exact to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className={ faqClass }>
                <NavLink to="faq">FAQ</NavLink>
              </li>              
            </ul>            
          </div>
        </div>
      </nav>
    );
  }
}