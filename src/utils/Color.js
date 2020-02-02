// @flow
import type { Color4 } from "types";
export const IdenticalColor4 = (a: Color4, b: Color4) => {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
};
