import React from "react";

import { SettingsContext } from "../../context/settings-context.js";

class Form extends React.Component {
  static contextType = SettingsContext;
  render() {
    return (
      <SettingsContext.Consumer>
        {context => (
          <>
            <div>
              <form onSubmit={this.context.addItem}>
                <input
                  placeholder="Add To Do List Item"
                  onChange={this.context.handleInputChange}
                />
              </form>
            </div>
          </>
        )}
      </SettingsContext.Consumer>
    );
  }
}

export default Form;
