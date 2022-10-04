import { Alert, Button, Col, Row, Text } from "differoute-styles";
import React, { useState } from "react";
import MainContainer from "../layouts/MainContainer";

function AlertComponent(props) {
  const [alert, setAlert] = useState();
  const [modal, setModal] = useState({});
  const [values, setValues] = useState();
  const closeModal = () => {
    setAlert();
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onChangeButtonLabel = (e) => {
    const { value, name } = e.target;
    setModal({
      ...modal,
      [name]: { ...modal[name], onClick: closeModal, label: value },
    });
  };

  const onChangeButtonType = (e) => {
    const { value, name } = e.target;
    setModal({
      ...modal,
      [name]: { ...modal[name], onClick: closeModal, option: { type: value } },
    });
  };

  return (
    <MainContainer>
      {alert && <Alert {...alert} />}
      <Button
        label="세팅하기 귀찮을때 이걸로 확인"
        type="text"
        active
        mb={30}
        onClick={() => {
          setAlert({
            title: "알림",
            content: "정말 삭제하시겠습니까?",
            confirm: { onClick: closeModal },
            cancel: { onClick: closeModal },
            close: { onClick: closeModal },
            option: {
              flexDirection: "column",
            },
          });
        }}
      />
      <Col gap={16}>
        <Row gap={12} alignItems="center">
          <Text>title : </Text>
          <input onChange={onChange} value={values?.title} name="title" />
        </Row>
        <Row gap={12} alignItems="center">
          <Text>content : </Text>
          <input onChange={onChange} value={values?.content} name="content" />
        </Row>
        <Row gap={12} alignItems="center">
          <Text>close 버튼 : </Text>
          <Button
            size="small"
            label={(modal?.close && "true") || "false"}
            active
            buttonColor="g900"
            onClick={() =>
              setModal(
                (!modal?.close && {
                  ...modal,
                  close: { onClick: closeModal },
                }) || { ...modal, close: null }
              )
            }
          />
        </Row>
        <Row gap={12} alignItems="center">
          <Text>cancel 버튼 : </Text>
          <Button
            size="small"
            label={(modal?.cancel && "true") || "false"}
            active
            buttonColor="g900"
            onClick={() =>
              setModal(
                (!modal?.cancel && {
                  ...modal,
                  cancel: { onClick: closeModal },
                }) || { ...modal, cancel: null }
              )
            }
          />
          {modal?.cancel && (
            <>
              <Text>cancel 버튼 label(옵션) : </Text>
              <input
                onChange={onChangeButtonLabel}
                name="cancel"
                value={modal?.cancel?.label}
              />
            </>
          )}
        </Row>
        <Row gap={12} alignItems="center">
          <Text>confirm 버튼 : </Text>
          <Button
            size="small"
            label={(modal?.confirm && "true") || "false"}
            active
            buttonColor="g900"
            onClick={() =>
              setModal(
                (!modal?.confirm && {
                  ...modal,
                  confirm: { onClick: closeModal },
                }) || { ...modal, confirm: null }
              )
            }
          />
          {modal?.confirm && (
            <>
              <Text>confirm 버튼 label(옵션) : </Text>
              <input
                onChange={onChangeButtonLabel}
                name="confirm"
                value={modal?.confirm?.label}
              />
              <Text>confirm 버튼 type : </Text>
              <input
                onChange={onChangeButtonType}
                name="confirm"
                value={modal?.confirm?.option?.type}
                placeholder="none, outline, text"
              />
            </>
          )}
        </Row>
        <Row gap={12} alignItems="center">
          <Text>custom 버튼 : </Text>
          <Button
            size="small"
            label={(modal?.customButton && "true") || "false"}
            active
            buttonColor="g900"
            onClick={() =>
              setModal(
                (!modal?.customButton && {
                  ...modal,
                  customButton: { onClick: closeModal },
                }) || { ...modal, customButton: null }
              )
            }
          />
          {modal?.customButton && (
            <>
              <Text>custom 버튼 label(필수) : </Text>
              <input
                onChange={onChangeButtonLabel}
                name="customButton"
                value={modal?.customButton?.label}
              />
              <Text>confirm 버튼 type : </Text>
              <input
                onChange={onChangeButtonType}
                name="customButton"
                value={modal?.customButton?.option?.type}
                placeholder="none, outline, text"
              />
            </>
          )}
        </Row>
        <Row gap={12} alignItems="center">
          <Text>버튼 배열 : </Text>
          <Button
            size="small"
            label={
              (modal?.option?.flexDirection === "column" && "column") || "row"
            }
            active
            buttonColor="g900"
            onClick={() =>
              setModal({
                ...modal,
                option: {
                  flexDirection:
                    (modal?.option?.flexDirection === "column" && "row") ||
                    "column",
                },
              })
            }
          />
        </Row>
      </Col>
      <Button
        mt={30}
        width="100%"
        size="medium"
        label="open alert"
        type="outline"
        color="g800"
        active
        onClick={() => setAlert({ ...modal, ...values })}
      />
    </MainContainer>
  );
}

export default AlertComponent;
