// Function copied from
// https://github.com/mantinedev/mantine/blob/2fe9c4ab078ec03ddcc97613a1059e7db8b4e4ed/src/mantine-styles/src/theme/utils/filter-props/filter-props.ts

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type FilterPropsRes<T extends Record<string, any>> = {
  [Key in keyof T]-?: T[Key] extends undefined ? never : T[Key];
};

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function filterProps<T extends Record<string, any>>(props: T) {
  return Object.keys(props).reduce<FilterPropsRes<T>>((acc, key: keyof T) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as FilterPropsRes<T>);
}
