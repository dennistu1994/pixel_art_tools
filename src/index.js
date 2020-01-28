// @flow

import Scaffold from "components/scaffold";
import React from "react";
import ReactDOM from "react-dom";

const scaffoldDiv = document.getElementById("scaffold");
if (scaffoldDiv != null) {
  ReactDOM.render(<Scaffold />, scaffoldDiv);
}
