export const compose = (...fns: Array<Function>) => (x: any) => fns.reduceRight((v, f) => f(v), x);

export function get<T = Record<string, string>>(
  object: T,
  path: Array<keyof T>,
  index = 0,
): string {
  const key = path[index];
  if (key === undefined) return '';

  const val = object[key];

  if (val === undefined) return '';

  if (typeof val === 'string') return val;

  if (typeof val === 'object' && val !== null) {
    return get(Object(val), path, index + 1);
  }
  return '';
}

export function replace(str: string, obj: Record<string, string | number>): string {
  return str.replace(/{(.*?)}/g, (_, key) => obj[key] as string);
}
