// https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix
//a  c  0  tx  
//b  d  0  ty 
//0  0  1  tz  
//0  0  0  1

import { cos, sin, tan, toRad } from './utils'

const Matrix3d = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 0
]

/**
 * combine 2 matrixes 行x列
 * @param m1  [a, c, 0, tx, b, d, 0, ty, 0, 0, 1, tz, 0, 0, 0, 1]
 * @param m2  [a, c, 0, tx, b, d, 0, ty, 0, 0, 1, tz, 0, 0, 0, 1]
 */
const  combine3d = (m1, m2) => {
    return [
      m1[0] * m2[0] + m1[1] * m2[4] + m1[2] * m2[8] + m1[3] * m2[12],  m1[0] * m2[1] + m1[1] * m2[5] + m1[2] * m2[9] + m1[3] * m2[13],  m1[0] * m2[2] + m1[1] * m2[6] + m1[2] * m2[10] + m1[3] * m2[14],  m1[0] * m2[3] + m1[1] * m2[7] + m1[2] * m2[11] + m1[3] * m2[15],
      m1[4] * m2[0] + m1[5] * m2[4] + m1[6] * m2[8] + m1[7] * m2[12],  m1[4] * m2[1] + m1[5] * m2[5] + m1[6] * m2[9] + m1[7] * m2[13],  m1[4] * m2[2] + m1[5] * m2[6] + m1[6] * m2[10] + m1[7] * m2[14],  m1[4] * m2[3] + m1[5] * m2[7] + m1[6] * m2[11] + m1[7] * m2[15],
      m1[8] * m2[0] + m1[9] * m2[4] + m1[10] * m2[8] + m1[11] * m2[12],  m1[8] * m2[1] + m1[9] * m2[5] + m1[10] * m2[9] + m1[11] * m2[13],  m1[8] * m2[2] + m1[9] * m2[6] + m1[10] * m2[10] + m1[11] * m2[14],  m1[8] * m2[3] + m1[9] * m2[7] + m1[10] * m2[11] + m1[11] * m2[15],
      m1[12] * m2[0] + m1[13] * m2[4] + m1[14] * m2[8] + m1[15] * m2[12],  m1[12] * m2[1] + m1[13] * m2[5] + m1[14] * m2[9] + m1[15] * m2[13],  m1[12] * m2[2] + m1[13] * m2[6] + m1[14] * m2[10] + m1[15] * m2[14],  m1[12] * m2[3] + m1[13] * m2[7] + m1[14] * m2[11] + m1[15] * m2[15]
    ]
  }

const translate = (x, y=x) => {
    return [
        1, 0, 0, x,
        0, 1, 0, y,
        0, 0, 1, 0,
        0, 0, 0, 0
    ]
}

const translate3d = (x = 0, y = 0, z = 0) => {
    return [
        1, 0, 0, x,
        0, 1, 0, y,
        0, 0, 1, z,
        0, 0, 0, 0
    ]
}


const translateX = (x) => {
    return [
        1, 0, 0, x,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 0
    ]
}

const translateY = (y) => {
    return [
        1, 0, 0, 0,
        0, 1, 0, y,
        0, 0, 1, 0,
        0, 0, 0, 0
    ]
}

const translateZ = (z) => {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, z,
        0, 0, 0, 0
    ]
}


// skew() CSS defines a transformation that skews an element on the 2D plane
const skew = (α, β = α) => {
    α = toRad(α)
    β = toRad(β)
    return [
        1, tan(α), 0, 0,
        tan(β), 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 0
    ]
}

const skewX = (α) => {
    α = toRad(α)
    return [
        1, tan(α), 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 0
    ]
}

const skewY = (β) => {
    β = toRad(β)
    return [
        1, 0, 0, 0,
        tan(β), 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 0
    ]
}


const scale = (scalex, scaley = scalex) => {
    return [
        scalex, 0, 0, 0,
        0, scaley, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 0
    ]
}

const scale3d = (scalex = 1, scaley = 1, scalez = 1) => {
    return [
        scalex, 0, 0, 0,
        0, scaley, 0, 0,
        0, 0, scalez, 0,
        0, 0, 0, 0
    ]
}

const scaleX = (scalex) => {
    return [
        scalex, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 0
    ]
}

const scaleY = (scaley) => {
    return [
        1, 0, 0, 0,
        0, scaley, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 0
    ]
}

const scaleZ = (scalez) => {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, scalez, 0,
        0, 0, 0, 0
    ]
}

// https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/rotate3d
/**
 * rotate3d
 * @param x <number> 0 ~ 1
 * @param y <number> 0 ~ 1
 * @param z <number> 0 ~ 1
 * @param deg <angle>
 */
const rotate3d = (x, y, z, deg) => {
    const α = toRad(deg)
    const sc = sin(α/2)*cos(α/2)
    const sq = (sin(α/2))^2
    return [
        1 - 2 * sq * (y^2 + z^2), 2 * (x * y * sq  - z * sc), 2 * (x * z * sq  + y * sc), 0,
        2 * (x * y * sq  + z * sc), 1 - 2 * (x^2 + z^2) * sq, 2 * (y * z * sq  - x * sc), 0,
        2 * (x * z * sq  - y * sc), 2 * (y * z * sq + x * sc) * sq, 1 - 2 * sq * (x^2 + y^2),, 0,
        0, 0, 0, 1
    ]
}

const rotateX = (deg) => {
    const α = toRad(deg)
    return [
        1, 0, 0, 0,
        0, cos(α), -sin(α), 0,
        0, sin(α), cos(α), 0,
        0, 0, 0, 1
      ]
}

const rotateY = (deg) => {
    const α = toRad(deg)
    return [
        cos(α), 0, sin(α), 0,
        0, 1, 0, 0,
        -sin(α), 0, cos(α), 0,
        0, 0, 0, 1
      ]
}

const rotateZ = (deg) => {
    const α = toRad(deg)
    return [
        cos(α), -sin(α), 0, 0,
        sin(α), cos(α), 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
      ]
}

/**
 * getCoordinateTransform 坐标变换
 * @param x 
 * @param y 
 * @param m 
 */
const getCoordinateTransform = (x, y, m) => {
    // m * [x,y,1]
    return {
        x: m[0]*x+m[1]*y+m[2],
        y: m[3]*x+m[4]*y+m[5]
    }
}

/**
 * getStyleMatrix2d 矩阵转换 css matrix
 * @param m  [a, c, e, b, d, f, 0, 0, 1]  => [a, b, c, d, e, f]
 */
const getStyleMatrix2d = (m = Matrix3d) => {
    // m * [x,y,1]
    return [
        m[0], m[3], m[1],
        m[4], m[2], m[5]
    ]
}


export {
    translate,
    translate3d,
    translateX,
    translateY,
    translateZ,
    skew,
    skewX,
    skewY,
    scale,
    scale3d,
    scaleX,
    scaleY,
    scaleZ,
    rotate3d,
    rotateX,
    rotateY,
    rotateZ,
    getCoordinateTransform,
    getStyleMatrix2d,
    combine3d,
}