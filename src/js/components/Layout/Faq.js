import React from 'react';
import Accordion from './Faq/Accordion';

require('../../../sass/faq.scss');

export default class Faq extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-6 col-md-push-3">
          <div className="about">
            <Accordion />
          </div>
        </div>
      </div>
    );
  }
}