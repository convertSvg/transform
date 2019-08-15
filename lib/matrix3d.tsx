// https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d
//a  c  0  tx  
//b  d  0  ty 
//0  0  1  tz  
//0  0  0  1
import { cos, sin, tan, atan, toRad, sqrt } from './utils'

const Matrix3d = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
]

/**
 * combine 2 matrixes 行x列
 * @param m1  [a, c, 0, tx, b, d, 0, ty, 0, 0, 1, tz, 0, 0, 0, 1]
 * @param m2  [a, c, 0, tx, b, d, 0, ty, 0, 0, 1, tz, 0, 0, 0, 1]
 */
function combine3d (...arg) {
    const args = [].slice.call(arguments) || []
    let m1 = args[0] || Matrix3d
    args.map((m2 ,idx) => {
        if(idx >=1){
            m1 = [
                m1[0] * m2[0] + m1[1] * m2[4] + m1[2] * m2[8] + m1[3] * m2[12],  m1[0] * m2[1] + m1[1] * m2[5] + m1[2] * m2[9] + m1[3] * m2[13],  m1[0] * m2[2] + m1[1] * m2[6] + m1[2] * m2[10] + m1[3] * m2[14],  m1[0] * m2[3] + m1[1] * m2[7] + m1[2] * m2[11] + m1[3] * m2[15],
                m1[4] * m2[0] + m1[5] * m2[4] + m1[6] * m2[8] + m1[7] * m2[12],  m1[4] * m2[1] + m1[5] * m2[5] + m1[6] * m2[9] + m1[7] * m2[13],  m1[4] * m2[2] + m1[5] * m2[6] + m1[6] * m2[10] + m1[7] * m2[14],  m1[4] * m2[3] + m1[5] * m2[7] + m1[6] * m2[11] + m1[7] * m2[15],
                m1[8] * m2[0] + m1[9] * m2[4] + m1[10] * m2[8] + m1[11] * m2[12],  m1[8] * m2[1] + m1[9] * m2[5] + m1[10] * m2[9] + m1[11] * m2[13],  m1[8] * m2[2] + m1[9] * m2[6] + m1[10] * m2[10] + m1[11] * m2[14],  m1[8] * m2[3] + m1[9] * m2[7] + m1[10] * m2[11] + m1[11] * m2[15],
                m1[12] * m2[0] + m1[13] * m2[4] + m1[14] * m2[8] + m1[15] * m2[12],  m1[12] * m2[1] + m1[13] * m2[5] + m1[14] * m2[9] + m1[15] * m2[13],  m1[12] * m2[2] + m1[13] * m2[6] + m1[14] * m2[10] + m1[15] * m2[14],  m1[12] * m2[3] + m1[13] * m2[7] + m1[14] * m2[11] + m1[15] * m2[15]
              ]
        }
    })
    return m1
  }

const translate = (x, y=x) => {
    return [
        1, 0, 0, x,
        0, 1, 0, y,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]
}

const translate3d = (x = 0, y = 0, z = 0) => {
    return [
        1, 0, 0, x,
        0, 1, 0, y,
        0, 0, 1, z,
        0, 0, 0, 1
    ]
}


const translateX = (x) => {
    return [
        1, 0, 0, x,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]
}

const translateY = (y) => {
    return [
        1, 0, 0, 0,
        0, 1, 0, y,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]
}

const translateZ = (z) => {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, z,
        0, 0, 0, 1
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
        0, 0, 0, 1
    ]
}

const skewX = (α) => {
    α = toRad(α)
    return [
        1, tan(α), 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]
}

const skewY = (β) => {
    β = toRad(β)
    return [
        1, 0, 0, 0,
        tan(β), 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]
}


const scale = (scalex, scaley = scalex) => {
    return [
        scalex, 0, 0, 0,
        0, scaley, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]
}

const scale3d = (scalex = 1, scaley = 1, scalez = 1) => {
    return [
        scalex, 0, 0, 0,
        0, scaley, 0, 0,
        0, 0, scalez, 0,
        0, 0, 0, 1
    ]
}

const scaleX = (scalex) => {
    return [
        scalex, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]
}

const scaleY = (scaley) => {
    return [
        1, 0, 0, 0,
        0, scaley, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]
}

const scaleZ = (scalez) => {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, scalez, 0,
        0, 0, 0, 1
    ]
}

// https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/rotate3d
/**
 * rotate3d
 * @param x <number> 0 ~ 1
 * @param y <number> 0 ~ 1
 * @param z <number> 0 ~ 1
 * @param deg <angle>
 * 幂运算符（**）ECMAScript 2016 (ES 7) 新特性
 */
const rotate3d = (x, y, z, deg) => {
    const rad = toRad(deg)
    const radZ = -atan(y / x)
    const radY = -atan(sqrt(x * x + y * y) / z)

    return combine3d(rotateZ(-radZ), rotateY(-radY), rotateZ(rad),  rotateY(radY), rotateZ(radZ))
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
    // m * [x,y,1,1]
    return {
        x: m[0]*x+m[1]*y+m[3],
        y: m[4]*x+m[5]*y+m[7]
    }
}

/**
 * getStyleMatrix2d 矩阵转换 css matrix
 * @param m  [a1, a2, a3, a4, b1, b2, b3, b4, c1, c2, c3, c4, d1, d2, d3, d4]  => (a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)
 */
const getStyleMatrix3d = (m = Matrix3d) => {
    return [
        m[0], m[4], m[8], m[12],
        m[1], m[5], m[9], m[13],
        m[2], m[6], m[10], m[14],
        m[3], m[7], m[11], m[15]
    ].join(',')
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
    getStyleMatrix3d,
    combine3d,
}