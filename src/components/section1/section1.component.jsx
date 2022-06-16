import React from "react";
import {
  Section1Container,
  Row,
  Header,
  Title,
  Description,
  LogoDiv,
  VisaLogo,
  DiscoverLogo,
  PaypalContainer,
  CheckboxTag,
  PaypalLogo,
} from "./section1.styles";
import Visa from "../../assets/images/Visa.png";
import Discover from "../../assets/images/discover.png";
import Paypal from "../../assets/images/paypal.png";
import Checkbox from "../checkbox/checkbox";

const Section1 = () => (
  <Section1Container>
    <Row>
      <Header>
        <Title>Payment Information</Title>
        <Description>Choose your method of payment</Description>
      </Header>
      <div></div>
      <div></div>
      <LogoDiv>
        <VisaLogo src={Visa} />
        <DiscoverLogo src={Discover} />
        <PaypalContainer>
          <CheckboxTag as={Checkbox} />
          <PaypalLogo src={Paypal} />
        </PaypalContainer>
      </LogoDiv>
    </Row>
  </Section1Container>
);

export default Section1;
