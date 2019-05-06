import React from "react";
import uuid from "uuid/v4";
export const SettingsContext = React.createContext();

export default class SettingsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      item: {},
      editing: false,
      handleInputChange: this.handleInputChange,
      addItem: this.addItem,
      updateItem: this.updateItem,
      toggleComplete: this.toggleComplete,
      saveItem: this.saveItem,
      toggleEdit: this.toggleEdit
    };
  }

  handleInputChange = e => {
    let item = {
      text: e.target.value,
      complete: !!e.target.complete,
      id: e.target.id || uuid()
    };
    this.setState({ item });
  };

  addItem = e => {
    e.preventDefault();
    e.target.reset();
    this.setState({ todoList: [...this.state.todoList, this.state.item] });
  };

  updateItem = e => {
    e.preventDefault();
    this.saveItem(this.state.item);
  };

  toggleComplete = id => {
    let item = this.state.todoList.filter(i => i.id === id)[0] || {};
    if (item.id) {
      item.complete = !item.complete;
      this.saveItem(item);
    }
  };

  saveItem = updatedItem => {
    this.setState({
      todoList: this.state.todoList.map(item =>
        item.id === updatedItem.id ? updatedItem : item
      ),
      editing: false
    });
  };

  toggleEdit = id => {
    let editing = this.state.editing === id ? false : id;
    this.setState({ editing });
  };
  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}
