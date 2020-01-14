import React, { Component } from "react";

import { Form } from "./components/Form";
import { User } from "./components/User";
import { Friends } from "./components/Friends";

class App extends Component {
  state = {
    user: {},
    friends: [],
    searchTerm: ""
  };

  render() {
    return (
      <>
        <Form></Form>
        <User></User>
        <Friends></Friends>
      </>
    );
  }
}

export default App;
