// @flow
export type Painting = {
  width: number,
  height: number,
  data: Array<Color4>
};

type Color3 = {
  r: number,
  g: number,
  b: number
};
// represents a RGBA color
type Color4 = Color3 & {
  a: number
};
