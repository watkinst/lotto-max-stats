import React from 'react';

export default class AccordionPanel extends React.Component {
  render() {

    var name = this.props.name;
    var question = this.props.question;
    var answer = this.props.answer;
      
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href={"#collapse" + name}>{question}</a>
          </h4>
        </div>
        <div id={"collapse" + name} className="panel-collapse collapse">
          <div className="panel-body">
            {answer}
          </div>
        </div>
      </div>      
    );    
  }
}