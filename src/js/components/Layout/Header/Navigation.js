import React from 'react';

require('../../../../sass/navigation.scss');

export default class Navigation extends React.Component {
  render() {
    return (
    	<nav>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </nav>
    );
  }
}