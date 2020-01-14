import React from "react";
import styled from "styled-components";

export const User = ({ user }) => {
  console.log(user);
  return (
    <UserCard>
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
`;
