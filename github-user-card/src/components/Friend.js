import React from "react";
import styled from "styled-components";

export const Friend = ({ friend, searchTerm, updateSearchTerm, fetchData }) => {
  return (
    <FriendCard
      onClick={() => {
        updateSearchTerm(friend.login, fetchData);
      }}
    >
      <Avatar src={friend.avatar_url}></Avatar>
      <h2>{friend.login}</h2>
    </FriendCard>
  );
};

const FriendCard = styled.div`
  width: calc(33% - 4rem);
  background-color: #2c2c2c;
  padding: 1rem;
  margin: 1rem;
  color: #aaa;

  h2 {
    font-size: 32px;
    display: inline-block;
    margin: 0 0 0 10px;
  }

  :hover {
    cursor: pointer;
    background-color: #3c3c3c;
    color: #eee;

    img {
      filter: grayscale(1);
    }
  }
`;

const Avatar = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
`;
