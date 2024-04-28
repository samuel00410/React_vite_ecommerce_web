import React, { useState } from "react";
import styled, {
  css,
  createGlobalStyle,
  ThemeProvider,
} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
  }
`;

// 創建一個明亮模式主題
const lightTheme = {
  backgroundColor: "white",
  color: "black",
  hovorColor: "gray",
};
// 創建一個暗色模式主題
const darkTheme = {
  backgroundColor: "black",
  color: "white",
  hoverColor: "darkgray",
};

const Container = styled.div``;

const Button = styled.button`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;

const HomePage = () => {
  const [dark, setDark] = useState(false); // 组件状态，控制主题是明亮还是暗色

  return (
    <>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Container>
          {/* 按钮组件，点击时切换主题 */}
          <Button
            onClick={() => {
              setDark(!dark); // 切换 dark 状态，从而切换主题
            }}
          >
            點我一下
          </Button>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default HomePage;
