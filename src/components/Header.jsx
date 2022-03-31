import React from "react";
import styled from "styled-components";

const Container = styled.div`
border-bottom: solid thin gray;
margin-bottom: 16px;
`
const Header = () => {
    return (
        <Container>
            <img src="/images/logo.jpeg" height="50" />
        </Container>
    )
}

export default Header;