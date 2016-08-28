import React from 'react';

export default class AccordionPanel extends React.Component {
  render() {

    var name = this.props.name;
    var question = this.props.question;
    var answer = this.props.answer;
      
    return (
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href={"#collapse" + name}>{question}</a>
          </h4>
        </div>
        <div id={"collapse" + name} class="panel-collapse collapse">
          <div class="panel-body">
            {answer}
          </div>
        </div>
      </div>      
    );    
  }
}