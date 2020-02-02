// @flow
import { Action } from "./Action";

export class History {
  static Action: typeof Action;

  // current is index of next action to redo A A A
  // current <= len(record)
  current: number;
  record: Action[];

  constructor() {
    this.record = [];
    this.current = 0;
  }

  push(action: Action) {
    if (this.current < this.record.length) {
      this.record = this.record.slice(0, this.current);
    }
    this.record.push(action);
  }

  undo() {
    if (this.current > 0) {
      this.current -= 1;
      this.record[this.current].undo();
    }
  }

  redo() {
    if (this.current < this.record.length) {
      this.record[this.current].redo();
      this.current += 1;
    }
  }
}
History.Action = Action;
