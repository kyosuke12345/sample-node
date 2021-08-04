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
  return typeof object === 'number';
}
/** stringかどうか */
export function isString(object: unknown): object is string {
  return typeof object === 'string';
}

/** booleanかどうか */
export function isBoolean(object: unknown): object is boolean {
  return typeof object === 'boolean';
}
