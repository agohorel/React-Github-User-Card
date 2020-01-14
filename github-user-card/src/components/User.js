import React from "react";
import styled from "styled-components";

export const User = ({ user }) => {
  console.log(user);
  return (
    <UserCard>
      <Avatar src={user.avatar_url}></Avatar>
      <h2>{user.login}</h2>
      <h3>{user.company}</h3>
      <h3>{user.location}</h3>
      <p>{user.bio}</p>
    </UserCard>
  );
};

const UserCard = styled.div`
  background-color: #3c3c3c;
  padding: 1rem;
  margin: 1rem;
  color: #eee;

  h2 {
    font-size: 32px;
    display: inline-block;
    margin: 0 0 0 10px;
  }

  h3 {
  }
`;

const Avatar = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
`;
