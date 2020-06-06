export function kebabCase(value: string): string {
  return Array.from(value.toLowerCase().matchAll(/([a-z0-9]+)/g))
    .map(([, part]): string => part)
    .join('-')
}
