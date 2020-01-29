// @flow
export type Painting = {
  width: number,
  height: number,
  data: Array<Color4>
};

// represents a RGB color
export type Color3 = {
  r: number,
  g: number,
  b: number
};

// represents a RGBA color
export type Color4 = Color3 & {
  a: number
};
