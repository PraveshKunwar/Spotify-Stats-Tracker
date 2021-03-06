import styled from "styled-components";

const FavoriteFlexed = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  > div > div {
    margin: 20px;
    text-align: center;
  }
`;

export default FavoriteFlexed;
