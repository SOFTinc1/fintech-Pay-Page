import React from "react";
import { Section4Container, Button, Total, Extra1, Extra2 } from "./section4.styles";
import CustomButton from "../button/button";

const Section4 = () => (
  <Section4Container>
    <Button as={CustomButton}>Complete Payment</Button>
    <Extra1></Extra1>
    <Extra2></Extra2>
    <Total>TOTAL: ₦2556.64</Total>
  </Section4Container>
);

export default Section4;
