import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import './NewTask.css';

class NewTask extends Component {
  render() {
    let formQuote = (
      <Form className="NewTask_form" onSubmit={this.props.submit}>
        <FormGroup className="NewTask_label">
          <Label for="text">Create new to do:</Label>
          <Input type="textarea" name="text" id="text" onChange={this.props.valueChange} value={this.props.value}/>
        </FormGroup>
        <Button type="submit" className="NewTask_button">Add</Button>
      </Form>
    )
    return formQuote;
  }
};

export default NewTask;