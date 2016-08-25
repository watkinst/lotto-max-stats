import React from 'react';

require('../../../sass/footer.scss');

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <footer className="container-fluid">
          <div className="row">
            <div className="col-xs-3">
            footer1
            </div>
            <div className="col-xs-3">
            footer2
            </div>
            <div className="col-xs-3">
            footer3
            </div>
            <div className="col-xs-3">
            footer4
            </div>
          </div>
        </footer>        
      </div>
    );
  }
}