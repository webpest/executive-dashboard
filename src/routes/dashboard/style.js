import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 200px auto;
  grid-gap: 1rem;

  & .tps {
    grid-row: 2 / 3;
    grid-column: 1 / 4;
  }
  & .tps_data {
    grid-row: 2 / 3;
    grid-column: 4 / 5;
  }
`;

export const Container = styled.div`
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: 1.5rem 1rem;
  transition: box-shadow 0.6s;
  border: 1px solid #e8f1fb;
  &:hover {
    box-shadow: 6px 15px 28px rgba(0, 0, 0, 0.05);
  }
`;

export const Table = styled.table`
  width: 100%;
  font-size: 0.8rem;
  & td,
  th {
    padding: 0.3rem 0;
  }
  & tr {
    border-bottom: 1px solid #e8f1fb;
    &:last-child {
      border-bottom: none;
    }
  }
`;
