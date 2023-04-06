import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "black")};
  background-color: ${(props) => (props.border ? "transparent" : "#0B093B")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "white")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#0B093B")};
    border: 1px solid black;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
    opacity: 0.8;
  }
`;

