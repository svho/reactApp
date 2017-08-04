import React, { Component } from 'react';
import { H1, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

// not working yet
class InputForm extends Component {

constructor(props){
  super(props);
  this.state = this.getInitialState();
}

  getInitialState() {
    return {
      value: ''
    };
  }

/* function is from me
  setState(state){
    this.state = state;
  }*/

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {

    this.setState({ value: e.target.value }); // function call was already like this
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
            <ControlLabel>(Not yet) Working example with validation</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
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
