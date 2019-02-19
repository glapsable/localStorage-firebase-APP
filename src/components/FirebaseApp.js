import React from 'react';
import Options from './firebaseApp/Options';
import AddOption from './firebaseApp/AddOption';
import database from '../firebase/firebase';

export default class FirebaseApp extends React.Component {
  state = {
    options: [],
    editedOption: {
      id: '',
      text: '',
    },
  };

  componentDidMount() {
    database.ref('options').once('value').then((snapshot) => {
      const optionsArr = [];
      snapshot.forEach((childSnapshot) => {
        optionsArr.push({
          id: childSnapshot.key,
          text: childSnapshot.val(),
        });
      });
      this.setState(() => ({
        options: optionsArr,
      }));
    });
  }

  handleAddOption = (option) => {
    const { options } = this.state;
    let found = false;
    if (!option) {
      return 'You must put properly value';
    }
    options.forEach((arrOption) => {
      if (arrOption.text.includes(option)) {
        found = true;
      }
    });
    if (found) {
      return 'Sorry, but there is same text value';
    }

    database.ref('options').push(option).then((ref) => {
      this.setState(prevState => ({
        options: prevState.options.concat({
          id: ref.key,
          text: option,
        }),
      }));
    });
    return undefined;
  };

  handleDeleteOption = (id) => {
    database.ref(`options/${id}`).remove().then(() => {
      this.setState(prevState => ({
        options: prevState.options.filter(option => option.id !== id),
      }));
    });
  };

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: [],
    }));
  };

  handleUpdateOption = (id) => {
    const { options } = this.state;
    const editedOption = options.filter(option => option.id === id);
    this.setState(() => ({
      editedOption: editedOption[0],
    }));
  };

  render() {
    const { options, editedOption } = this.state;
    return (
      <div>
        <h4>
          Firebase App
        </h4>
        <Options
          options={options}
          handleDeleteOption={this.handleDeleteOption}
          handleDeleteOptions={this.handleDeleteOptions}
          handleUpdateOption={this.handleUpdateOption}
          optionsLen={options.length}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
          editedOption={editedOption}
        />
      </div>
    );
  }
}
