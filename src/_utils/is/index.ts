import { tuple } from '../type'

const isTypeList = tuple('String', 'Number', 'Function', 'Null')
type IsType = typeof isTypeList[number]

const toString = Object.prototype.toString

const is = (value: unknown, type: IsType) => {
  return toString.call(value) === `[object ${type}]`
}

export const isFunction = (value: unknown): value is Function =>
  is(value, 'Function')

export const isUndefined = (value: unknown): value is undefined =>
  typeof value === 'undefined'

export const isNull = (value: unknown): value is null => is(value, 'Null')

export const isNotNull = <T = unknown>(value: unknown): value is T =>
  !isNull(value)

export const isNumber = (value: unknown): value is number => is(value, 'Number')
