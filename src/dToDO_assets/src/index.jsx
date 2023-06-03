import { dToDO } from "../../declarations/dToDO";
import * as React from "react";
import { render } from "react-dom";
import App from "./App";

const MyHello = () => {

  return (
    <App/>
  )
    
};

render(<MyHello />, document.getElementById("app"));