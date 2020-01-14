import React from "react";

import { Friend } from "./Friend";

export const Friends = ({ friends }) => {
  //   console.log(friends);
  return (
    <>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </>
  );
};
