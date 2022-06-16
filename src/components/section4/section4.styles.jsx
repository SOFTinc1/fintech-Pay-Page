import styled from "styled-components";

export const Section4Container = styled.div`
  padding: 20px 0 80px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Extra1 = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Extra2 = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Button = styled.button`
  margin: 0 100px 0 0;

  @media screen and (max-width: 800px) {
    margin: 45px 0 0 0;
  }
`;
export const Total = styled.div`
  font-size: 22px;
  font-family: "Axiforma";
  margin: 10px 0 0 120px;
  font-weight: 800;

  @media screen and (max-width: 800px) {
    padding: 20px 0 0 0;
    margin: -140px 0 0 0;
  }
`;
