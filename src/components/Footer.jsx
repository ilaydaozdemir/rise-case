import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <FooterController>
        <GitLabel>git</GitLabel>
        <StyledLink>repository</StyledLink>
      </FooterController>
      <FooterController>
        <Statement>@2021 Dilsaz Oktayı</Statement>
      </FooterController>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const FooterController = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 768px) {
    margin-right: 12px;
  }
`;

const GitLabel = styled.div`
  background-color: #ffe5e2;
  color: #fa8782;
  padding: 4px;
  margin: 6px;
  border-radius: 2px;
  font-weight: 600;
  cursor: pointer;
`;
const StyledLink = styled.a`
  color: gray;
  margin: auto;
  font-size: small;
  text-decoration: underline;
  cursor: pointer;
  &:hover,
  &:focus {
    color: palevioletred;
  }
`;
const Statement = styled.div`
  color: gray;
  margin: auto;
  font-size: small;
`;

export default Footer;
