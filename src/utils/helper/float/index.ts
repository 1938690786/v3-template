import type { BigSource } from 'big.js'
import Big from 'big.js'
/**
 * 浮点运算
 */
const floatHelper = {
  /**
   * 加法
   * @param nums
   * @returns number
   */
  plus(...nums: BigSource[]): number {
    let all = new Big(0)
    nums.forEach((v) => {
      all = all.plus(new Big(v))
    })
    return all.toNumber()
  },
  /**
   * 减法
   * @param nums
   * @returns number
   */
  min(...nums: BigSource[]): number {
    let all = new Big(0)
    nums.forEach((v, index) => {
      if (index === 0) {
        all = new Big(v)
      }
      else {
        all = all.minus(new Big(v))
      }
    })
    return all.toNumber()
  },
  /**
   * 乘法
   * @param nums
   * @returns number
   */
  tim(...nums: BigSource[]): number {
    let all = new Big(0)
    nums.forEach((v, index) => {
      if (index === 0) {
        all = new Big(v)
      }
      else {
        all = all.times(new Big(v))
      }
    })
    return all.toNumber()
  },
  /**
   * 除法
   * @param nums
   * @returns number
   */
  div(...nums: BigSource[]): number {
    let all = new Big(0)
    nums.forEach((v, index) => {
      if (index === 0) {
        all = new Big(v)
      }
      else {
        all = all.div(new Big(v))
      }
    })
    return all.toNumber()
  },
  /**
   * 取余数
   * @param num1
   * @param num2
   * @returns number
   */
  mod(num1: BigSource, num2: BigSource): number {
    return new Big(num1).mod(new Big(num2)).toNumber()
  },
  /**
   * 取绝对值
   * @param num
   * @returns number
   */
  abs(num: BigSource): number {
    return new Big(num).abs().toNumber()
  },
  /**
   * 补全小数点位数
   * @param num
   * @param point
   * @param rm
   * @returns number
   */
  fix(num: BigSource, point: number, rm?: 'up' | 'down'): string {
    // 0:向下取，1：向上取
    if (rm) {
      Big.RM = rm === 'up' ? Big.roundHalfUp : Big.roundDown
    }
    return new Big(num).toFixed(point)
  },
}

export default floatHelper
