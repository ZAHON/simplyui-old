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

Use the `size` property to change font size of the content inside Kbd. You can set the value to `xs`, `sm`, `md`, `lg`, `xl` or `inherit`. The default value is `md`.

```jsx
import { Kbd } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex items-center gap-x-4">
      <Kbd size="xs">⌘</Kbd>
      <Kbd size="sm">⌘</Kbd>
      <Kbd size="md">⌘</Kbd>
      <Kbd size="lg">⌘</Kbd>
      <Kbd size="xl">⌘</Kbd>
      <Kbd size="inherit">⌘</Kbd>
    </div>
  );
}
```

## Rounded

Use the `rounded` property to change border radius of the Kbd. You can set the value to `none`, `xs`, `sm`, `md`, `lg`, `xl` or `full`. The default value is `xs`.

```jsx
import { Kbd } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex gap-x-4">
      <Kbd rounded="none">⌘</Kbd>
      <Kbd rounded="xs">⌘</Kbd>
      <Kbd rounded="sm">⌘</Kbd>
      <Kbd rounded="md">⌘</Kbd>
      <Kbd rounded="lg">⌘</Kbd>
      <Kbd rounded="xl">⌘</Kbd>
      <Kbd rounded="full">⌘</Kbd>
    </div>
  );
}
```

## Get element ref

```tsx
import { useRef } from 'react';
import { Kbd } from '@simplyui/react';

function Demo() {
  const kbdRef = useRef<HTMLElement>(null);

  return <Kbd ref={kbdRef}>⌘</Kbd>;
}
```
