import styled from "styled-components";

const ProfileName = styled.a`
  font-size: 45px;
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
    font-size: 30px;
  }
`;

export default ProfileName;
