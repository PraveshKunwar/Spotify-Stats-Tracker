import styled from "styled-components";

const FavoriteTracksText = styled.a`
  text-align: center;
  text-decoration: none;
  padding: 20px;
  font-size: 18px;
  color: white;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: rgb(30, 215, 96);
  }
  &:visited {
    color: white;
  }
`;

export default FavoriteTracksText;
