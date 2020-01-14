import React from "react";

import { Friend } from "./Friend";

export const Friends = ({ friends }) => {
  //   console.log(friends);
  return (
    <>
      {friends.map(friend => (
        <Friend friend={friend}></Friend>
      ))}
    </>
  );
};
