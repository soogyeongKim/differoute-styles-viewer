import React, { useState } from "react";
import { Button, Row, Text } from "differoute-styles";
import ButtonGroup from "../components/Button/ButtonGroup";
import MainContainer from "../layouts/MainContainer";

function ButtonComponent(props) {
  const [buttonSize, setButtonSize] = useState("medium");
  const buttonSizeArray = ["xsmall", "small", "medium", "large", "xlarge"];
  return (
    <MainContainer minHeight="100vh" padding="8%">
      <Row gap={10} mb={50}>
        {buttonSizeArray.map((size) => (
          <Button
            key={size}
            size="medium"
            label={size}
            flex={1}
            active={buttonSize === size}
            onClick={() => setButtonSize(size)}
          />
        ))}
      </Row>
      <Text type="h3" textAlign="center" mb={50}>
        {buttonSize.toUpperCase()}
      </Text>
      <ButtonGroup buttonSize={buttonSize} />
    </MainContainer>
  );
}

export default ButtonComponent;
