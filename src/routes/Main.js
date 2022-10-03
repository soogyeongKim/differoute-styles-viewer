import { Button, Container, Row } from "differoute-styles";
import React from "react";
import { useNavigate } from "react-router-dom";

function Main(props) {
  const navigate = useNavigate();
  return (
    <Container>
      <Row
        minHeight="100vh"
        padding="8%"
        alignItems="center"
        justifyContent="center"
        gap={30}
      >
        <Button
          label="go to Button"
          type="text"
          active
          onClick={() => navigate("/button")}
        />
        <Button
          label="go to Loading"
          type="text"
          active
          onClick={() => navigate("/loading")}
        />
        <Button
          label="go to Alert"
          type="text"
          active
          onClick={() => navigate("/alert")}
        />
      </Row>
    </Container>
  );
}

export default Main;
