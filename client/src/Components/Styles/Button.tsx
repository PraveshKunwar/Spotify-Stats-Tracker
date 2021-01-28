import styled from "styled-components";

const Button = styled.button`
  background: black;
  border-width: 2px;
  border-radius: 99px;
  border-color: gray;
  display: block;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 30px;

  &::focus {
    outline: none;
  }
  > a {
    text-decoration: none;
    background: black;
    color: white;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: rgb(30, 215, 96);
    }
  }
`;

export default Button;
