import React from "react";

import { SettingsContext } from "../../context/settings-context.js";

class Counter extends React.Component {
  static contextType = SettingsContext;
  render() {
    return (
      <SettingsContext.Consumer>
        {context => (
          <>
            <h2>There are {this.context.todoList.length} items in the list</h2>
          </>
        )}
      </SettingsContext.Consumer>
    );
  }
}

export default Counter;
