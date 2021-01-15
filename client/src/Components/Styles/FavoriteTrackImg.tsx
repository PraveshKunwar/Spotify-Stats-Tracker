import styled from "styled-components";

const FavoriteTrackImg = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  transition: opacity 0.5s ease-in-out;
  &:hover {
    opacity: 0.4;
  }
`;

export default FavoriteTrackImg;
