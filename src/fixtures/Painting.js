// @flow
import type { Painting, Vector2 } from "types";

export const RandomRGB = () => {
  return [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    1
  ];
};

export const makePainting = (dimension: Vector2): Painting => {
  const [x, y] = dimension;
  const data = [];
  for (var i = 0; i < x * y; i++) {
    data.push(RandomRGB());
  }
  return {
    width: x,
    height: y,
    data: data
  };
};

export const makeGradient = (dimension: Vector2): Painting => {
  const [x, y] = dimension;
  const data = [];
  const maxV = x ** 2 + y ** 2;
  for (var i = 0; i < y; i++) {
    for (var j = 0; j < x; j++) {
      let v = Math.round(((i ** 2 + j ** 2) / maxV) * 255);
      data.push([v, v, v, 1]);
    }
  }
  return {
    width: x,
    height: y,
    data: data
  };
};

export const makeWhiteCanvas = (dimension: Vector2): Painting => {
  const [x, y] = dimension;
  const data = [];
  const maxV = x ** 2 + y ** 2;
  for (var i = 0; i < y; i++) {
    for (var j = 0; j < x; j++) {
      let v = 255;
      data.push([v, v, v, 1]);
    }
  }
  return {
    width: x,
    height: y,
    data: data
  };
};
