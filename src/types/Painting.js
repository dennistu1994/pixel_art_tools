export type Painting = {
    width: number,
    height: number,
    data: Array<Color4>,
}

// represents a RGBA color
type Color4 = {
    r: number,
    g: number,
    b: number,
    a: number,
}
