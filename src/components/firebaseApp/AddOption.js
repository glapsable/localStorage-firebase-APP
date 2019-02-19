import React from 'react';
import PropTypes from 'prop-types';

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
    };
  }

  handleAddOption = (e) => {
    e.preventDefault();
    const { handleAddOption } = this.props;
    const option = e.target.elements.inputText.value.trim();
    const error = handleAddOption(option);
    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.inputText.value = '';
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input
            type="text"
            name="inputText"
          />
          <button type="submit">add option</button>
        </form>
      </div>
    );
  }
}

AddOption.propTypes = {
  handleAddOption: PropTypes.func.isRequired,
};

export default AddOption;
