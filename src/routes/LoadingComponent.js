import { Button, Col, Loading } from "differoute-styles";
import React, { useState } from "react";
import MainContainer from "../layouts/MainContainer";

function LoadingComponent(props) {
  const [loading, setLoading] = useState(false);
  const [loadingType, setLoadingType] = useState("none");
  return (
    <MainContainer backgroundColor="g100">
      <Loading loading={loading} type={loadingType} />
      <Col position="fixed" zIndex="9999" bottom="30px" right="30px" gap={20}>
        <Button
          label={
            (loading && loadingType === "inside" && "end Inside loading") ||
            "start Inside loading"
          }
          active
          size="xlarge"
          onClick={() => {
            setLoading(loadingType === "none" || !loading);
            setLoadingType("inside");
          }}
        />
        <Button
          label={
            (loading && loadingType === "none" && "end Main loading") ||
            "start Main loading"
          }
          active
          size="xlarge"
          onClick={() => {
            setLoading(loadingType === "inside" || !loading);
            setLoadingType("none");
          }}
        />
      </Col>
    </MainContainer>
  );
}

export default LoadingComponent;
