import React from 'react';
import Main from './Content/Main';
import Sidebar from './Content/Sidebar';

export default class Content extends React.Component {
  render() {
    return (
      <div>
        <Main data={this.props.data} />
        <Sidebar />
      </div>
    );
  }
}