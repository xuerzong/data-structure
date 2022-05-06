import { tuple } from '../type';

const isTypeList = tuple('String', 'Number', 'Function');
type IsType = typeof isTypeList[number];

const toString = Object.prototype.toString;

const is = (value: unknown, type: IsType) => {
  return toString.call(value) === `[object ${type}]`;
};

export const isFunction = (value: unknown): value is Function =>
  is(value, 'Function');

export const isUndefined = (value: unknown): value is undefined =>
  typeof value === 'undefined';
