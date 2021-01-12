import styled from "styled-components";

const LoginButton = styled.button`
  background: #15883e;
  border-radius: 99px;
  background: linear-gradient(to left, #15883e 50%, #1ed760 50%) right;
  background-size: 200%;
  transition: 0.5s ease-out;
  &:hover {
    background-position: left;
  }
`;

export default LoginButton;
