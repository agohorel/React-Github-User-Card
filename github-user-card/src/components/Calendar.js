import React from "react";
import GithubCalendar from "react-github-calendar";

const Calendar = ({ user }) => {
  console.log(user);
  return (
    <GithubCalendar
      username={user}
      color="hsl(203, 9%, 75%)"
      blockSize={20}
    ></GithubCalendar>
  );
};

export default Calendar;
