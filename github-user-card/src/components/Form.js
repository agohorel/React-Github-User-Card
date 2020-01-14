import React from "react";

export const Form = ({ searchTerm, updateSearchTerm, fetchData }) => {
  return (
    <>
      <form>
        <label htmlFor="search">Search for a Github User</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={e => updateSearchTerm(e.target.value)}
        />
      </form>
      <button onClick={fetchData}>search</button>
    </>
  );
};
