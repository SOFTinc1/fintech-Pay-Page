import React from "react";
import {FooterContainer, FooterUpper, LogoContainer, OptionContainer, Span } from './footer.styles';
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Footer = () => (
    <FooterContainer>
        <FooterUpper>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <OptionContainer>
                <Span>advertise</Span>
                <Span>career</Span>
                <Span>become a contributor</Span>
            </OptionContainer>
        </FooterUpper>
        {/* <hr />
        <p>developed by idowu elijah <span>&copy;2022</span> </p> */}
    </FooterContainer>
)

export default Footer;