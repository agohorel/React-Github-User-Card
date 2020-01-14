import React, { Component } from "react";
import axios from "axios";

import { Form } from "./components/Form";
import { User } from "./components/User";
import { Friends } from "./components/Friends";

class App extends Component {
  state = {
    user: {},
    friends: [],
    searchTerm: "agohorel"
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.searchTerm}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.error(err));

    axios
      .get(`https://api.github.com/users/${this.state.searchTerm}/followers`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <Form></Form>
        <User user={this.state.user}></User>
        <Friends friends={this.state.friends}></Friends>
      </>
    );
  }
}

export default App;
