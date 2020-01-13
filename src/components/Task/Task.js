import React, {Component} from "react";
import {Card, CardText, CardBody, Button } from 'reactstrap';
import './Task.css';

class Task extends Component {
  render() {
    return (
      <div>
        <Card className="Task_block">
          <CardBody>
          <CardText>Text note: {this.props.text}</CardText>
            <Button className="button_delete" color="link" 
              onClick={this.props.delete}>
              <i className="far fa-trash-alt" style={{fontSize: '20px'}}/>
            </Button>
          </CardBody>
        </Card>
      </div>
    )
  }
};

export default Task;