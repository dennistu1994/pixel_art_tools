// @flow
import Controller from "./Controller";

class ControllerExtension {
  controller: Controller;

  constructor(controller: Controller): void {
    this.controller = controller;
  }
}

export default ControllerExtension;
