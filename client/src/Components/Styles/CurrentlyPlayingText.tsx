import styled from "styled-components";

const CurrentlyPlayingText = styled.a`
  text-align: center;
  font-size: 18px;
  color: white;
  transition: color 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    color: rgb(30, 215, 96);
  }
  &:visited {
    color: white;
  }
`;

export default CurrentlyPlayingText;
