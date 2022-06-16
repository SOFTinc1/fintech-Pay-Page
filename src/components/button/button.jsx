import { ButtonContainer } from "./button.styles";

const CustomButton = ({ children, ...props }) => (
  <ButtonContainer {...props}>
    {children} {" "}
  </ButtonContainer>
);

export default CustomButton;
