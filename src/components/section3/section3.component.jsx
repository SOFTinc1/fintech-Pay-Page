import React from "react";
import {
  Section3Container,
  TitleTag,
  Title1,
  Title3,
  Title3Tag,
  Title4,
  PriceTag,
  Price1,
  Extra1,
  Extra2
} from "./section3.styles";

const Section3 = () => (
  <Section3Container>
    <TitleTag>
      <Title1>Subtotal</Title1>
      <Title1>Estimated TAX</Title1>
      <Title3Tag>
      <Title3>Promotional Code:</Title3>
      <Title4>Z4KXLM9A</Title4>
      </Title3Tag>
    </TitleTag>
    <Extra1></Extra1>
    <Extra2></Extra2>
    <PriceTag>
      <Price1>₦2,497.00</Price1>
      <Price1>₦119.64</Price1>
      <Price1>₦-60.00</Price1>
    </PriceTag>
  </Section3Container>
);

export default Section3;
