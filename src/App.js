import React from "react";
//Main Page
import Main from "./pages/logic-deduction";
//GlobalStyle
import GlobalStyle from "./pages/global-style";

function App() {
  return (
    <GlobalStyle>
      <div>
        <Main></Main>
      </div>
    </GlobalStyle>
  );
}

export default App;
