import React from 'react';
import Options from './Options';
import AddOption from './AddOption';

export default class MyApp extends React.Component {
  state = {
    options: [],
  };

  componentDidMount() {
    try {
      const optionsStr = localStorage.getItem('options');
      if (optionsStr) {
        const options = JSON.parse(optionsStr);
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.warn(e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { options } = this.state;
    if (prevState.options.length !== options.length) {
      const json = JSON.stringify(options);
      localStorage.setItem('options', json);
    }
  }

  handleAddOption = (option) => {
    const { options } = this.state;
    if (!option) {
      return 'You must put properly value';
    }
    if (options.includes(option)) {
      return 'Sorry, but there is same text value';
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
    return undefined;
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionToRemove),
    }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: [],
    }));
  };

  render() {
    const { options } = this.state;
    return (
      <div>
        <h4>LocalStorage App</h4>
        <Options
          options={options}
          handleDeleteOption={this.handleDeleteOption}
          handleDeleteOptions={this.handleDeleteOptions}
          optionsLen={options.length}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
