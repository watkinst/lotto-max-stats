import React, { useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";

require('../../../../sass/navigation.scss');

const Navigation = () => {
  const location = useLocation();
  const homeClass = (location.pathname === "/") ? "active" : "";
  const faqClass= (location.pathname === "/faq") ? "active" : "";

  useEffect(() => {
    $(document).on('click','.navbar-collapse.in',function(e) {
      if($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
          $(this).collapse('hide');
      }
    });
  }), [];

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
              <NavLink to="/">
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

export default Navigation;