import React from "react";
import {
  Section2Container,
  AtmImg,
  Row,
  Row2,
  FormContainer,
  OtherOptions,
  CheckboxContainer,
  Text,
  Button
} from "./section2.styles";
import Atm from "../../assets/images/card.png";
import Checkbox from "../checkbox/checkbox";
import FormInput from "../form-input/form-input";
import CustomButton from "../button/button";

const Section2 = () => (
  <Section2Container>
    <AtmImg src={Atm} />

    <FormContainer>
      <form>
        <Row>
          <FormInput type="text" label="Credit card number" placeholder="Credit card number" required />
          <FormInput type="text" label="Expiration date" placeholder="Credit card number" required />
        </Row>
        <Row2>
          <FormInput type="text" label="Security code" placeholder="Credit card number" required />
          <FormInput type="text" label="Postal Code" placeholder="Postal Code" required />
        </Row2>

        <OtherOptions>
          <CheckboxContainer as={Checkbox} />
          <Text>Use this card for next time purchase</Text>
        </OtherOptions>

        <Button as={CustomButton}>Add Card</Button>
      </form>
    </FormContainer>
  </Section2Container>
);

export default Section2;
