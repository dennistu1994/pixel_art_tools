// @flow
export type Painting = {
  width: number,
  height: number,
  data: Array<Color4>
};

// represents a RGB color
export type Color3 = [number, number, number];

// represents a RGBA color
export type Color4 = [number, number, number, number];
