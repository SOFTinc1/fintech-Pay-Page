import styled from "styled-components";

export const Section2Container = styled.div`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const AtmImg = styled.img`
  width: 100%;
  margin: -130px 0 0 -90px;

  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Row2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin: -20px 0 0 0;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: -50px 0 0 0;
  }
`;

export const FormContainer = styled.div``;
export const OtherOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0px;
  margin: -15px 0 0 0;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin: 30px 0 0 0;
  }
`;
export const CheckboxContainer = styled.div``;
export const Text = styled.p`
  margin: 0 0 0 -290px;
  @media screen and (max-width: 800px) {
    margin: 0 0 0 -120px;
  }
`;
export const Button = styled.button`
  text-align: center;
  margin: 40px 0 0 0;
`;
