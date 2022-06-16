import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;
  padding: 30px 0 40px 0;
`;

export const LogoContainer = styled(Link)`
  width: 100%;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 90%;
  border-radius: 100%;
  margin: -12px 0 0 50px;
`;


export const Option = styled(Link)`
  color: #fff;
`;