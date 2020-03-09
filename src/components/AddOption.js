import React, { Component } from 'react';

class AddOption extends Component {
  state = {
    error: undefined
  };

handleAddOption = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value.trim(); //.trim makes the spaces diappear when adding a string
  const error = this.props.handleAddOption(option); //Passing data option in

this.setState(() => ({error}));

//or
/*
this.setState(() => {
  return {error};
});
*/
//If there isn't any error the input is cleared
if (!error) {
     e.target.elements.option.value = '';
   }
};

  render(){
    return(
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
         <input className="add-option__input" type="text" name="option" />
         <button className="button">Add Options</button>
         </form>
      </div>
    );
  }
}
export default AddOption;
