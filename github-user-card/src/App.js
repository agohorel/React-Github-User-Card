import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

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

  updateSearchTerm = (input, callback) => {
    this.setState({ searchTerm: input }, () => {
      callback(this.state.searchTerm);
    });
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
      <Container>
        <Form
          searchTerm={this.state.searchTerm}
          updateSearchTerm={this.updateSearchTerm}
          fetchData={this.fetchData}
        ></Form>
        <User user={this.state.user}></User>
        <Friends
          friends={this.state.friends}
          updateSearchTerm={this.updateSearchTerm}
          searchTerm={this.state.searchTerm}
          fetchData={this.fetchData}
        ></Friends>
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap");
  background-color: #1c1c1c;
  min-height: 100vh;
  font-family: "IBM Plex Sans", monospace;
`;
