// a	c	e           a	c	e       1	0	0
// b	d	f     =>    b	d	f  =>   0	1	0
//                      0	0	1       0	0	1

import { cos, sin, tan, toRad } from './utils'

const Matrix = [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
]

/**
 * combine 2 matrixes 行x列
 * @param m1  [a, c, e, b, d, f, 0, 0, 1]
 * @param m2  [a, c, e, b, d, f, 0, 0, 1]
 */
function combine(...arg) {
    const args = [].slice.call(arguments) || []
    let m1 = args[0] || Matrix
    args.map((m2 ,idx) => {
        if(idx >=1){
            m1 = [
                m1[0] * m2[0] + m1[1] * m2[3] + m1[2] * m2[6],  m1[0] * m2[1] + m1[1] * m2[4] + m1[2] * m2[7],  m1[0] * m2[2] + m1[1] * m2[5] + m1[2] * m2[8],
                m1[3] * m2[0] + m1[4] * m2[3] + m1[5] * m2[6],  m1[3] * m2[1] + m1[4] * m2[4] + m1[5] * m2[7],  m1[3] * m2[2] + m1[4] * m2[5] + m1[5] * m2[8],
                m1[6] * m2[0] + m1[7] * m2[3] + m1[8] * m2[6],  m1[6] * m2[1] + m1[7] * m2[4] + m1[8] * m2[7],  m1[6] * m2[2] + m1[7] * m2[5] + m1[8] * m2[8]
              ]
        }
    })
    return m1
  }

const translate = (x, y=x) => {
    return [
        1, 0, x,
        0, 1, y,
        0, 0, 1
    ]
}

const translateX = (x) => {
    return [
        1, 0, x,
        0, 1, 0,
        0, 0, 1
    ]
}

const translateY = (y) => {
    return [
        1, 0, 0,
        0, 1, y,
        0, 0, 1
    ]
}


const skew = (α, β = α) => {
    α = toRad(α)
    β = toRad(β)
    return [
        1, tan(α), 0,
        tan(β), 1, 0,
        0, 0, 1
    ]
}

const skewX = (α) => {
    α = toRad(α)
    return [
        1, tan(α), 0,
        0, 1, 0,
        0, 0, 1
    ]
}

const skewY = (β) => {
    β = toRad(β)
    return [
        1, 0, 0,
        tan(β), 1, 0,
        0, 0, 1
    ]
}


const scale = (scalex, scaley = scalex) => {
    return [
        scalex, 0, 0,
        0, scaley, 0,
        0, 0, 1
    ]
}

const scaleX = (scalex) => {
    return [
        scalex, 0, 0,
        0, 1, 0,
        0, 0, 1
    ]
}

const scaleY = (scaley) => {
    return [
        1, 0, 0,
        0, scaley, 0,
        0, 0, 1
    ]
}

// https://www.w3.org/TR/SVG/coords.html#TransformProperty  rotate(angle, cx, cy)
const rotate = (deg, cx = 0, cy=cx) => {
    if(deg !== 0){
        const α = toRad(deg)
        const m1 = translate(cx, cy)
        const m2 = [
            cos(α), -sin(α), 0,
            sin(α), cos(α), 0,
            0, 0, 1
        ]
        const m3 = translate(-cx, -cy)
        return combine(m1, m2, m3)
    } else {
        return Matrix
    }
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
const getStyleMatrix2d = (m = Matrix) => {
    // m * [x,y,1]
    return [
        m[0], m[3], m[1],
        m[4], m[2], m[5]
    ].join(',')
}


export {
    translate,
    translateX,
    translateY,
    skew,
    skewX,
    skewY,
    scale,
    scaleX,
    scaleY,
    rotate,
    getCoordinateTransform,
    getStyleMatrix2d,
    combine,
}