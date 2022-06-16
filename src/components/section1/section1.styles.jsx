import styled from "styled-components";

export const Section1Container = styled.div`
  width: 100%;
  padding: 10px 0 0 0;

  // @media screen and (max-width: 800px) {
  //   position: relative;
  // }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Header = styled.div``;
export const Title = styled.h1`
  font-weight: 800;
  color: #000;
  font-size: 25px;
`;
export const Description = styled.p`
  font-size: 15px;
`;
export const LogoDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 10px 0 0 0;
`;
export const VisaLogo = styled.img`
  width: 100%;
  background: #1a237e;
  padding: 5.5px 3px 5.5px 3px;
  margin: 0 0 0 -60px;

  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;
export const DiscoverLogo = styled.img`
  width: 100%;
  background: #9e9e9e;
  padding: 10px 5px 10px 5px;
  margin: 0 0 0 -60px;

  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;
export const PaypalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  margin: 0 0 0 10px;

  @media screen and (max-width: 800px) {
    grid-gap: 0px;
  }
`;
export const CheckboxTag = styled.div`
  margin: -37px 0 0 0;

  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;
export const PaypalLogo = styled.img`
  width: 300%;
  margin: 5px 0 0 0;
`;
