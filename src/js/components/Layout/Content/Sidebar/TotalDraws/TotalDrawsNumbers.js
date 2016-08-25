import React from 'react';

require('../../../../../../sass/totaldrawsnumbers.scss');

export default class TotalDrawsNumbers extends React.Component {
  
  render() {

    var numberOfDraws = this.props.getNumberOfDraws();

    return (
      <div className="col-xs-12 total-draws-numbers">
        <button className="btn btn-primary btn-total-draws-numbers disabled">{numberOfDraws}</button>        
      </div>
    );
  }
}