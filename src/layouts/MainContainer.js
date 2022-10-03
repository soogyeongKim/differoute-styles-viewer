import { Close, Container, Row } from "differoute-styles";
import React from "react";
import { useNavigate } from "react-router-dom";

function MainContainer({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <Container minHeight="100vh" padding="8%" {...props}>
      <Row justifyContent="flex-end" mb={50}>
        <Close onClick={() => navigate(-1)} />
      </Row>
      {children}
    </Container>
  );
}

export default MainContainer;
