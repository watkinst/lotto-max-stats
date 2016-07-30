import React from 'react';
import Navigation from './Header/Navigation';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        
          <header>            
            <Navigation />
          </header>
        
      </div>
    );
  }
}