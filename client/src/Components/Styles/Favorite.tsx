import styled from "styled-components";

const Favorite = styled.a`
  font-size: 30px;
  color: white;
  text-align: center;
  text-decoration: none;
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

export default Favorite;
