import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

// not working yet
class InputForm extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  getInitialState(){
    return({ value: '' });
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

// can only be called with bind(this)
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

// can be called without bind(this)
  handleChange2 = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>I already made an input form</h1>
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>now finally working input form with validation</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange2} //{this.handleChange.bind(this)}
            />
            <FormControl.Feedback />
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </FormGroup>
        </form>
      </div>
    );
  }

}

export default InputForm;
