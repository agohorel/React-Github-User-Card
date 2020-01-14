import React, { Component } from "react";
import axios from "axios";

import { Form } from "./components/Form";
import { User } from "./components/User";
import { Friends } from "./components/Friends";
import { token } from "./auth";

let options = {
  headers: {
    Authorization: `Bearer ${token}`
  }
};

class App extends Component {
  state = {
    user: {},
    friends: [],
    searchTerm: "agohorel"
  };

  componentDidMount() {
    this.fetchData();
  }

  updateSearchTerm = input => {
    this.setState({ searchTerm: input });
  };

  fetchData = () => {
    axios
      .get(`https://api.github.com/users/${this.state.searchTerm}`, options)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.error(err));

    axios
      .get(
        `https://api.github.com/users/${this.state.searchTerm}/followers`,
        options
      )
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.error(err));
  };

  render() {
    return (
      <>
        <Form
          searchTerm={this.state.searchTerm}
          updateSearchTerm={this.updateSearchTerm}
          fetchData={this.fetchData}
        ></Form>
        <User user={this.state.user}></User>
        <Friends friends={this.state.friends}></Friends>
      </>
    );
  }
}

export default App;
