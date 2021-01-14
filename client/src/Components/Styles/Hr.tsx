import styled from "styled-components";

const Hr = styled.hr`
  border: 8px solid white;
  border-radius: 5px;
  transition: border-color 0.3s ease-in-out;
  margin-top: 1rem;
  width: 50%;
  &:hover {
    border-color: rgb(30, 215, 96);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default Hr;
