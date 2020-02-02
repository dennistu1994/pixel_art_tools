// @flow
import { GlobalHotKeys } from "react-hotkeys";
import React from "react";

const keyMap = {
  UNDO: "command+z",
  REDO: "shift+command+z"
};
const handlers = {
  UNDO: e => {
    e.preventDefault();
    console.log("undo");
  },
  REDO: e => {
    e.preventDefault();
    console.log("redo");
  }
};

export const HotkeyManager = () => (
  <GlobalHotKeys keyMap={keyMap} handlers={handlers} />
);
