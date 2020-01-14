import React from "react";
import styled from "styled-components";

export const Form = ({ searchTerm, updateSearchTerm, fetchData }) => {
  return (
    <FormContainer>
      <StyledForm>
        <label htmlFor="search">Search for a Github User</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={e => updateSearchTerm(e.target.value)}
        />
      </StyledForm>
      <Button onClick={fetchData}>search</Button>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  background-color: #4c4c4c;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const StyledForm = styled.form`
  font-family: "IBM Plex Sans", monospace;

  * {
    margin-right: 1rem;
  }

  label {
    color: #fff;
  }

  input {
    background-color: #6c6c6c;
    padding: 0.5rem;
    color: #fff;
    border: none;
  }
`;

const Button = styled.button`
  background-color: #1c1c1c;
  padding: 0.6rem 1rem;
  color: #eee;
  border: none;
  transition: 0.2s ease-out all;

  :hover {
    cursor: pointer;
    background-color: #2c2c2c;
    color: #fff;
  }
`;
