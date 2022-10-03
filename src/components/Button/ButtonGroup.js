import React from "react";
import { Button, Col, Row, Text } from "differoute-styles";

function ButtonGroup({ buttonSize }) {
  return (
    <>
      <Row gap="10px" padding="20px 0" align="center">
        <Col gap="10px" alignItems="center" flex={1}>
          <Text type="h8" textAlign="center">
            Inactive
          </Text>
          <Button size={buttonSize || "medium"} label="Button" />
        </Col>
        <Col gap="10px" alignItems="center" flex={1}>
          <Text type="h8" textAlign="center">
            Active
          </Text>
          <Button size={buttonSize || "medium"} label="Button" active />
        </Col>
        <Col gap="10px" alignItems="center" flex={1}>
          <Text type="h8" textAlign="center">
            Destructive
          </Text>
          <Button
            size={buttonSize || "medium"}
            label="Button"
            active
            buttonColor="destructive"
          />
        </Col>
        <Col gap="10px" alignItems="center" flex={1}>
          <Text type="h8" textAlign="center">
            Inactive Loading
          </Text>
          <Button size={buttonSize || "medium"} label="Button" loading />
        </Col>
        <Col gap="10px" alignItems="center" flex={1}>
          <Text type="h8" textAlign="center">
            Active Loading
          </Text>
          <Button size={buttonSize || "medium"} label="Button" active loading />
        </Col>
      </Row>
      <Row gap="10px" padding="20px 0" align="center">
        <Col gap="10px" alignItems="center" flex={1}>
          <Text type="h8" textAlign="center">
            Inactive
          </Text>
          <Button size={buttonSize || "medium"} label="Button" type="outline" />
        </Col>
        <Col gap="10px" alignItems="center" flex={1}>
          <Text type="h8" textAlign="center">
            Active
          </Text>
          <Button
            size={buttonSize || "medium"}
            label="Button"
            active
            type="outline"
          />
        </Col>
        <Col gap="10px" alignItems="center" flex={1}>
          <Text type="h8" textAlign="center">
            Destructive
          </Text>
          <Button
            size={buttonSize || "medium"}
            label="Button"
            active
            buttonColor="destructive"
            type="outline"
          />
        </Col>
        <Col gap="10px" alignItems="center" flex={1}>
          <Text type="h8" textAlign="center">
            Inactive Loading
          </Text>
          <Button
            size={buttonSize || "medium"}
            label="Button"
            loading
            type="outline"
          />
        </Col>
        <Col gap="10px" alignItems="center" flex={1}>
          <Text type="h8" textAlign="center">
            Active Loading
          </Text>
          <Button
            size={buttonSize || "medium"}
            label="Button"
            active
            loading
            type="outline"
          />
        </Col>
      </Row>
      <Row gap="10px" padding="20px 0" align="center">
        <Col gap="10px" alignItems="center" flex={1}>
          <Text type="h8" textAlign="center">
            Inactive
          </Text>
          <Button
            size={buttonSize || "medium"}
            label="Text Button"
            type="text"
          />
        </Col>
        <Col gap="10px" alignItems="center" flex={1}>
          <Text type="h8" textAlign="center">
            Active
          </Text>
          <Button
            size={buttonSize || "medium"}
            label="Text Button"
            active
            type="text"
          />
        </Col>
        <Col gap="10px" alignItems="center" flex={1}>
          <Text type="h8" textAlign="center">
            Destructive
          </Text>
          <Button
            size={buttonSize || "medium"}
            label="Text Button"
            active
            buttonColor="destructive"
            type="text"
          />
        </Col>
        <Col gap="10px" alignItems="center" flex={1}>
          <Text type="h8" textAlign="center">
            Inactive Loading
          </Text>
          <Button
            size={buttonSize || "medium"}
            label="Text Button"
            loading
            type="text"
          />
        </Col>
        <Col gap="10px" alignItems="center" flex={1}>
          <Text type="h8" textAlign="center">
            Active Loading
          </Text>
          <Button
            size={buttonSize || "medium"}
            label="Text Button"
            active
            loading
            type="text"
          />
        </Col>
      </Row>
    </>
  );
}

export default ButtonGroup;
