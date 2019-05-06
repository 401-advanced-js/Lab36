import React from "react";

import "./components/todo/todo.scss";

import Form from "./components/form/form.js";
import SettingsContext from "./context/settings-context.js";
import Counter from "./components/counter/counter.js";
import List from "./components/list/list.js";

export default class App extends React.Component {
  render() {
    return (
      <>
        <SettingsContext>
          <div className="todo">
            <Counter />
            <Form />
            <List />
          </div>
        </SettingsContext>
      </>
    );
  }
}
