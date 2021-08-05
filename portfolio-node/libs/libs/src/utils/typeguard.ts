import {
  isDate as isDateBase,
  isString as isStringBase,
  isNumber as isNumberBase,
  isObject as isObjectBase,
} from 'class-validator';

/** nullかundefinedかどうか */
export function isNullOrUndefined(object: unknown): object is null | undefined {
  return object === null || object === undefined;
}

/** nullかどうか */
export function isNull(object: unknown): object is null {
  return object === null;
}

/** undefinedかどうか */
export function isUndefined(object: unknown): object is undefined {
  return object === undefined;
}

/** numberかどうか */
export function isNumber(object: unknown): object is number {
  return isNumberBase(object);
}
/** stringかどうか */
export function isString(object: unknown): object is string {
  return isStringBase(object);
}

/** booleanかどうか */
export function isBoolean(object: unknown): object is boolean {
  return typeof object === 'boolean';
}

/** objectかどうか */
export function isObject(object: unknown): object is Record<string, unknown> {
  return isObjectBase(object);
}

/** Dateかどうか */
export function isDate(object: unknown): object is Date {
  return isDateBase(object);
}

/**
 * T型配列かどうか
 * @param object 対象オブジェクト
 * @param isFunc T型判定用関数
 * @typeParam T 配列の要素型
 */
export function isArray<T>(
  object: unknown,
  isFunc: ((object: unknown) => object is T) | ((object: unknown) => boolean),
): object is T[] {
  return Array.isArray(object) && object.every((element) => isFunc(element));
}
