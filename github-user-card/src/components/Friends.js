import React from "react";
import styled from "styled-components";

import { Friend } from "./Friend";

export const Friends = ({ friends }) => {
  //   console.log(friends);
  return (
    <FriendsContainer>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </FriendsContainer>
  );
};

const FriendsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
