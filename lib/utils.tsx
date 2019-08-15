const {
    sqrt,
    cos,
    sin,
    tan,
    atan,
    PI
  } = Math


export {
    sqrt,
    cos,
    sin,
    tan,
    atan,
    PI
}

/**
 * @name degToRad 度数转弧度
 * @param angle 
 */
export const degToRad =  (angle) =>  {
    return angle * PI / 180 
}

/**
 * @name gradToRad 梯度(Gradians)转弧度
 * @param grad  90deg = 100grad = 0.25turn ≈ 1.570796326794897rad
 */
export const gradToRad =  (grad) =>  {
    return grad / 200 * PI
}

/**
 * @name turnToRad 转、圈（Turns）转弧度
 * @param turn 90deg = 100grad = 0.25turn ≈ 1.570796326794897rad
 */
export const turnToRad =  (turn) =>  {
    return turn * 2 * PI
}

/**
 * @name toRad 转为弧度
 * @param deg 
 */
export const toRad =  (deg) =>  {
    deg = String(deg)
    const value = parseFloat(deg)
    const unit = deg.toLowerCase().replace(`${value}`, '')
    switch (unit) {
      case 'grad':
        return gradToRad(value)
      case 'turn':
        return turnToRad(value)
      case 'rad': // 弧度值
        return value
      case 'deg':        
      default:
        return degToRad(value)
    }
}

