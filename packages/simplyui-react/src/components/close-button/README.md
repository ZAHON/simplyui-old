# CloseButton

Button with close icon

## Import

```jsx
import { CloseButton } from '@simplyui/react';
```

## Usage

```jsx
function Demo() {
  return <CloseButton aria-label="Close" />;
}
```

## Disabled state

Use the `disabled` property to disable interaction and focus.

```jsx
import { CloseButton } from '@simplyui/react';

function Demo() {
  return <CloseButton disabled aria-label="Close" />;
}
```

## Sizes

Use the `size` property to change the size of the CloseButton. You can set the value to `xs`, `sm`, `md`, `lg` or `xl`. The default value is `md`.

```jsx
import { CloseButton } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex items-center gap-x-4">
      <CloseButton size="xs" aria-label="Close" />
      <CloseButton size="sm" aria-label="Close" />
      <CloseButton size="md" aria-label="Close" />
      <CloseButton size="lg" aria-label="Close" />
      <CloseButton size="xl" aria-label="Close" />
    </div>
  );
}
```

## Colors

Use the `color` property to change the color of the CloseButton. You can set the value to `neutral`, `primary`, `secondary`, `info`, `success`, `warning` or `error`. The default value is `neutral`.

```jsx
import { CloseButton } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex gap-x-4">
      <CloseButton color="neutral" aria-label="Close" />
      <CloseButton color="primary" aria-label="Close" />
      <CloseButton color="secondary" aria-label="Close" />
      <CloseButton color="info" aria-label="Close" />
      <CloseButton color="success" aria-label="Close" />
      <CloseButton color="warning" aria-label="Close" />
      <CloseButton color="error" aria-label="Close" />
    </div>
  );
}
```

## Variants

Use the `variant` property to change the variant of the CloseButton. You can set the value to `filled`, `light`, `outline`, `subtle` or `transparent`. The The default value is `subtle`.

```jsx
import { CloseButton } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex gap-x-4">
      <CloseButton variant="filled" aria-label="Close" />
      <CloseButton variant="light" aria-label="Close" />
      <CloseButton variant="outline" aria-label="Close" />
      <CloseButton variant="subtle" aria-label="Close" />
      <CloseButton variant="transparent" aria-label="Close" />
    </div>
  );
}
```

## Icon type

Use `iconType` property to change the icon type. You can set the value to `x-mark` or `x-circle`. The The default value is `x-mark`.

```jsx
import { CloseButton } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex gap-x-4">
      <CloseButton iconType="x-mark" aria-label="Close" />
      <CloseButton iconType="x-circle" aria-label="Close" />
    </div>
  );
}
```

## Icon size

Each size of CloseButton includes appropriate icon size. Use `iconSize` property to override icon size determined by `size` property.

```jsx
import { CloseButton } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex gap-x-4">
      <CloseButton aria-label="Close" />
      <CloseButton iconSize={24} aria-label="Close" />
      <CloseButton iconSize="1.5rem" aria-label="Close" />
    </div>
  );
}
```

## Border radius

Each size of CloseButton includes appropriate border radius value. Use `rounded` property to override border radius determined by `size` property. You can set the value to `none`, `xs`, `sm`, `md`, `lg`, `xl` or `full`.

```jsx
import { CloseButton } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex gap-x-4">
      <CloseButton rounded="none" variant="filled" aria-label="Close" />
      <CloseButton rounded="xs" variant="filled" aria-label="Close" />
      <CloseButton rounded="sm" variant="filled" aria-label="Close" />
      <CloseButton rounded="md" variant="filled" aria-label="Close" />
      <CloseButton rounded="lg" variant="filled" aria-label="Close" />
      <CloseButton rounded="xl" variant="filled" aria-label="Close" />
      <CloseButton rounded="full" variant="filled" aria-label="Close" />
    </div>
  );
}
```

## Get button ref

```tsx
import { useRef } from 'react';
import { CloseButton } from '@simplyui/react';

function Demo() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return <CloseButton ref={buttonRef} aria-label="Close" />;
}
```

## Accessibility

CloseButton renders a regular button element with close icon. Include `title` or `aria-label` properties for screen reader support.

```jsx
import { CloseButton } from '@simplyui/react';

function Demo() {
  return <CloseButton title="Close" />;
}
```

```jsx
import { CloseButton } from '@simplyui/react';

function Demo() {
  return <CloseButton aria-label="Close" />;
}
```
