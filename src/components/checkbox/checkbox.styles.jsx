import styled from 'styled-components';

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  padding: 1px
`;

export const Border = styled.div`
  width: 15px;
  height: 15px;

  background: #C4C4C4;
  border: 1px solid #C4C4C4;
  border-radius: 100%;
  box-sizing: border-box; 
`;

export const Indicator = styled.div`

  visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  position: absolute;
  z-index: 1;

  margin: 4px;

  width: 15px;
  height: 15px;
  // background: #7000FF;
`;


export const Label = styled.label`
  padding-left: 12px;
  position: relative;
  top: 2px;
  
  font-family: Axiforma;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  
  // color: #555555;
`;