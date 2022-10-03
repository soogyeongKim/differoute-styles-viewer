import { GlobalStyles, theme } from "differoute-styles";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AlertComponent from "./routes/AlertComponent";
import ButtonComponent from "./routes/ButtonComponent";
import LoadingComponent from "./routes/LoadingComponent";
import Main from "./routes/Main";

function App(props) {
  const userTheme = {
    ...theme,
    colors: { ...theme.colors, primary: "#3782F3" },
  };
  return (
    <ThemeProvider theme={userTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/button" element={<ButtonComponent />} />
          <Route path="/loading" element={<LoadingComponent />} />
          <Route path="/alert" element={<AlertComponent />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
