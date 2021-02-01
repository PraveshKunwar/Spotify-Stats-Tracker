import styled from "styled-components";

const AlbumName = styled.a`
  font-size: ${(props: any) => props.size || `30px`};
  color: white;
  width: 100%;
  margin-top: 1rem;
  text-align: center;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: rgb(30, 215, 96);
  }
  &::visited {
    color: white;
  }
  @media screen and (max-width: 550px) {
    font-size: 15px;
  }
`;

export default AlbumName;
