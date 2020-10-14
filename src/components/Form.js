import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="firstName" onChange={event => this.props.handleChange(event)} value={this.props.data.firstName} />
          <input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.props.data.lastName} />
        </form>
      </div>
    )
  }
}

export default Form;