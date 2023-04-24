export const compose = (...fns: Array<Function>) => (x: any) => fns.reduceRight((v, f) => f(v), x);

export function get(object: Record<string, unknown>, path: Array<string>, index = 0): string {
  const key: string = path[index];
  if (key === undefined) return '';

  const res = object[key];

  if (res === undefined) return '';

  if (typeof res === 'string') return res;

  if (typeof res === 'object' && res !== null) {
    return get(Object(res), path, index + 1);
  }
  throw new Error(`Unexpected value ${res} at ${key}`);
}

export function replace(str: string, obj: Record<string, string | number>): string {
  return str.replace(/{(.*?)}/g, (_, key) => obj[key] as string);
}

export type PathInto<T extends Record<string, any> | any> = keyof {
  [K in keyof T as T[K] extends string
    ? K
    : T[K] extends Record<string, any>
      ? `${K & string}.${keyof T[K] & string}`
      : '' // empty string
  ]: any;
};
