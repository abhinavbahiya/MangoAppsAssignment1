import React from 'react';

class Reminder extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: '', lengthRemaining: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    text = event.target.value;
    lengthOfNote = text.length;
    this.setState({value: event.target.value, lengthRemaining: 100-lengthOfNote});
  }

  handleDateChange(event) {
    // Handle Date Here
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + this.state.value);
  }

   render() {
      return (
        <div>
           <form onSubmit={this.handleSubmit}>
             <label>
              Note:
              <input type="text" maxlength="100" value={this.state.value} onChange={this.handleChange} />
             </label>
             <label>
               Characters Remaining {this.state.lengthRemaining}
             </label>
             <DatePicker dateFormat="YYYY/MM/DD" disabled={true} selected={this.state.startDate} onChange={this.handleDateChange} />
             <input type="submit" value="Submit" />
           </form>
        </div>
      );
   }
}

export default Reminder;
