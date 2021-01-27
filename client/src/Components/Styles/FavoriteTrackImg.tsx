import styled from "styled-components";

const FavoriteTrackImg = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  transition: opacity 0.5s ease-in-out;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    opacity: 1;
  }
`;

export default FavoriteTrackImg;
