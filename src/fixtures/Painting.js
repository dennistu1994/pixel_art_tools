// @flow
import type { Painting, Vector2 } from 'types';
export const painting: Painting = {
    width: 2,
    height: 2,
    data: [{
        r: 100,
        g: 100,
        b: 100,
        a: 1,
    },
    {
        r: 30,
        g: 30,
        b: 30,
        a: 1,
    },
    {
        r: 255,
        g: 100,
        b: 100,
        a: 1,
    },
    {
        r: 100,
        g: 255,
        b: 0,
        a: 1,
    }]
}

const randomRGB = ()=>{
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256),
        a: 1
    }
}

export const makePainting = (
    dimension: Vector2,
): Painting => {
    const [x, y] = dimension;
    const data = []
    for (var i = 0; i < x * y; i ++) {
        data.push(randomRGB());
    }
    return {
        width: x,
        height: y,
        data: data
    }
};