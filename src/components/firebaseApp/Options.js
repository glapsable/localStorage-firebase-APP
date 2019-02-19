import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

const Options = ({
  options, handleDeleteOption, handleDeleteOptions, optionsLen,
}) => (
  <div>
    <h3>Your options</h3>
    <button
      type="button"
      onClick={handleDeleteOptions}
      disabled={!optionsLen}
    >
      Remove all
    </button>
    {
      options.length > 0 ? (
        options.map((option, i) => (
          <Option
            option={option}
            key={option.id}
            count={i + 1}
            handleDeleteOption={handleDeleteOption}
          />
        ))
      ) : (
        <p>Sorry there is no options to show</p>
      )
    }
  </div>
);

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDeleteOption: PropTypes.func.isRequired,
  handleDeleteOptions: PropTypes.func.isRequired,
  optionsLen: PropTypes.number.isRequired,
};

export default Options;
