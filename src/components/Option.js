import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ optionText, count, handleDeleteOption }) => (
  <div className="option">
    <p>{count}. {optionText}</p>
    <button
      type="button"
      onClick={() => {
        handleDeleteOption(optionText);
      }}
    >
      remove
    </button>
  </div>
);

Option.propTypes = {
  optionText: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  handleDeleteOption: PropTypes.func.isRequired,
};

export default Option;
