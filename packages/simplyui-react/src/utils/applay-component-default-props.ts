// Function copied from
// https://github.com/mantinedev/mantine/blob/2fe9c4ab078ec03ddcc97613a1059e7db8b4e4ed/src/mantine-styles/src/theme/MantineProvider.tsx#L44

import { filterProps } from './filter-props';

export function applayComponentDefaultProps<
  T extends Record<string, any>, // eslint-disable-line  @typescript-eslint/no-explicit-any
  U extends Partial<T> = {} // eslint-disable-line  @typescript-eslint/ban-types
>(
  defaultProps: U,
  props: T
): [keyof U] extends [keyof T]
  ? T
  : {
      [Key in Exclude<keyof T, keyof U>]: T[Key];
    } & {
      [Key in Extract<keyof T, keyof U>]-?: U[Key] & T[Key];
    } {
  return { ...defaultProps, ...filterProps(props) };
}
