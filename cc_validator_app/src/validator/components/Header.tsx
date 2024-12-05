import styled from "styled-components";

const Container = styled.div``;

const Header = () => {
  return (
    <Container>
      <h3>Credit Card Validator</h3>
      <span>
        Enter a Credit Card Number and click 'Validate' to check if it is a
        Valid card number
      </span>
    </Container>
  );
};

export default Header;
