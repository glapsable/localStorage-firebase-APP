import React from 'react';
import PropTypes from 'prop-types';

const Option = ({
  option, count, handleDeleteOption,
}) => (
  <div className="option">
    <p>{count}. {option.text}</p>
    <button
      type="button"
      onClick={() => {
        handleDeleteOption(option.id);
      }}
    >
      remove
    </button>
  </div>
);

Option.propTypes = {
  option: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  count: PropTypes.number.isRequired,
  handleDeleteOption: PropTypes.func.isRequired,
};

export default Option;
