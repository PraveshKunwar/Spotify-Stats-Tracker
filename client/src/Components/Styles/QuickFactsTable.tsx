import styled from "styled-components";

const QuickFactsTable = styled.table`
  background: #0e0d0d;
  border-radius: 99px;
  margin-top: 1rem;
  padding: 30px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: white;
  font-size: 20px;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: rgb(30, 215, 96);
  }
  > tr > td:nth-child(even) {
    color: rgb(30, 215, 96);
  }
  > a {
    color: rgb(30, 215, 96);
  }
`;

export default QuickFactsTable;
