# Kbd

Display keyboard button or keys combination

## Import

```jsx
import { Kbd } from '@simplyui/react';
```

## Usage

```jsx
import { Kbd } from '@simplyui/react';

function Demo() {
  return (
    <>
      <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>P</Kbd>
    </>
  );
}
```

## Sizes

Use the `size` property to change the size of the Kbd. You can set the value to `xs`, `sm`, `md`, `lg` or `xl`. The default value is `sm`.

```jsx
import { Kbd } from '@simplyui/react';

export function Demo() {
  return (
    <div className="flex items-end gap-x-4">
      <Kbd size="xs">⌘</Kbd>
      <Kbd size="sm">⌘</Kbd>
      <Kbd size="md">⌘</Kbd>
      <Kbd size="lg">⌘</Kbd>
      <Kbd size="xl">⌘</Kbd>
    </div>
  );
}
```

## Rounded

Use the `rounded` property to change border radius of the Kbd. You can set the value to `none`, `xs`, `sm`, `md`, `lg`, `xl`, `squared` or `full`. The default value is `xs`.

```jsx
import { Kbd } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex items-end gap-x-4">
      <Kbd rounded="none">⌘</Kbd>
      <Kbd rounded="xs">⌘</Kbd>
      <Kbd rounded="sm">⌘</Kbd>
      <Kbd rounded="md">⌘</Kbd>
      <Kbd rounded="lg">⌘</Kbd>
      <Kbd rounded="xl">⌘</Kbd>
      <Kbd rounded="squared">⌘</Kbd>
      <Kbd rounded="full">⌘</Kbd>
    </div>
  );
}
```

## Get kbd ref

```tsx
import { useRef } from 'react';
import { Kbd } from '@simplyui/react';

function Demo() {
  const kbdRef = useRef<HTMLElement>(null);

  return <Kbd ref={kbdRef}>⌘</Kbd>;
}
```
