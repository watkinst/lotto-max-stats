import React from 'react';

require('../../../../../sass/accordionintro.scss');

export default class AccordionIntro extends React.Component {

  render() {
    return (
      <div className="accordion-intro">
        <h2 className="title">Frequently Asked Questions</h2>
        <p>Here are some of the most frequently asked questions about Lotto Max and LottoMaxStats.com</p>
      </div>
    );
  }
}