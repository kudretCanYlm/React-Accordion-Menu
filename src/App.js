import style from "./style/style.css"
import Main from "./pages/Main"
import React, { useState } from "react";
import { QuestionContext } from "./context/QuestionContext"
import QuestionReducer from "./reducer/QuestionReducer"

function App() {

  let [state,setState]=useState(QuestionReducer([],"list"))

  return (
    <div className="app">
      <QuestionContext.Provider value={state}>
        <Main />
      </QuestionContext.Provider>
    </div>
  );
}

export default App;
