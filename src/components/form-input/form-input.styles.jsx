import styled from "styled-components";


// const shrinkLabelStyles = css`
//   top: -30px;
//   font-size: 12px;
//   font-family: Axiforma;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 16px;
//   line-height: 25px;
//   color: ${mainColor};
// `;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
  input[type="password"] {
    letter-spacing: 0.1em;
  }

  @media screen and (max-width: 800px) {
    margin: 15px;
  }
`;

export const FormInputContainer = styled.input`
  background: #EEEEEE;
  border: 1px solid #9E9E9E;
  box-sizing: border-box;
  border-radius: 4px;
  height: 50px;
  font-family: "Axiforma";
  color: #000!important;
  font-size: 16px;
  padding: 20px;
  display: block;
  width: 100%;
  margin: 6px 0;

  &::placeholder {
    font-size: 13px;
    color: #000!important;
    text-transform: capitalize;
    font-family: "Axiforma";
    

    @media screen and (min-width: 1400px) {
      display: none!important;
    }
  }
  &:focus {
    outline: 0.5px solid transparent;
    color: #000;
  }
`;

export const FormInputLabel = styled.label`
  font-family: "Axiforma";
  color: #000!important;
  font-size: 16px;
  // font-weight: 800;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: -30px;
  transition: 300ms ease all;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
