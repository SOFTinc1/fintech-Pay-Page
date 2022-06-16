import styled from "styled-components";

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

export const Section3Container = styled.div`
  padding: 30px 0 30px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  }
`;
export const TitleTag = styled.div``;
export const Title1 = styled.h2`
  font-size: 17px;
  font-family: "Axiforma";
  padding: 0 0 10px 0;
  font-weight: 800;

  @media screen and (max-width: 800px) {
    padding: 0;
    font-size: 12px;
  }
`;
export const Title3Tag = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0px;
  }
`;
export const Title3 = styled.h2`
  font-size: 20px;
  font-family: "Axiforma";
  width: 200px;
  padding: 0 0 10px 0;
  font-weight: 800;

  @media screen and (max-width: 800px) {
    padding: 0;
    width: 120px;
    font-size: 12px;
  }
`;
export const Title4 = styled.h2`
  color: #aaa;
  font-size: 20px;
  font-family: "Axiforma";
  padding: 0 0 10px 0;
  font-weight: 800;

  @media screen and (max-width: 800px) {
    padding: 0;
    font-size: 12px;
  }
`;
export const PriceTag = styled.div`
  margin: 0 0 0 210px;

  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;
export const Price1 = styled.h2`
  font-family: "Axiforma";
  font-size: 20px;
  padding: 0 0 10px 0;
  font-weight: 800;

  @media screen and (max-width: 800px) {
    padding: 0;
    font-size: 12px;
  }
`;
