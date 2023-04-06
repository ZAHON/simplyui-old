# Loader

Indicate loading state

## Import

```jsx
import { Loader } from '@simplyui/react';
```

## Usage

```jsx
import { Loader } from '@simplyui/react';

function Demo() {
  return <Loader />;
}
```

## Variants

Use the `variant` property to change the variant of the Loader. You can set the value to `border`, `oval` or `spinner`. The The default value is `oval`.

```jsx
import { Loader } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex gap-x-4">
      <Loader variant="border" />
      <Loader variant="oval" />
      <Loader variant="spinner" />
    </div>
  );
}
```

## Sizes

Use the `size` property to change the size of the Loader. You can set the value to `xs`, `sm`, `md`, `lg` or `xl`. The default value is `md`.

```jsx
import { Loader } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex gap-x-4">
      <Loader size="xs" />
      <Loader size="sm" />
      <Loader size="md" />
      <Loader size="lg" />
      <Loader size="xl" />
    </div>
  );
}
```

## Colors

Use the `color` property to change the color of the Loader. You can set the value to `currentColor`, `neutral`, `primary`, `secondary`, `info`, `success`, `warning` or `error`. The default value is `primary`.

```jsx
import { Loader } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex gap-x-4">
      <Loader color="currentColor" />
      <Loader color="neutral" />
      <Loader color="primary" />
      <Loader color="secondary" />
      <Loader color="info" />
      <Loader color="success" />
      <Loader color="warning" />
      <Loader color="error" />
    </div>
  );
}
```

## Animation duration

The animation duration of this component is dependent on the `prefers-reduced-motion` media query.

- On browsers that support `prefers-reduced-motion`, and where the user has not explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: no-preference`), the value of the `speedSafe` property will be used as the duration of the animation. The `speedSafe` property default value is `750`.
- On browsers that support `prefers-reduced-motion`, and where the user has explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: reduce`), the value of the `speedReduce` property will be used as the duration of the animation. The `speedReduce` property default value is `1500`.

```jsx
import { Loader } from '@simplyui/react';

function Demo() {
  return <Loader speedSafe={650} speedReduce={2000} />;
}
```

## Get loader ref

```tsx
import { useRef } from 'react';
import { Loader } from '@simplyui/react';

function Demo() {
  const loaderRef = useRef<HTMLDivElement>(null);

  return <Loader ref={loaderRef} />;
}
```

## Accessibility

- Loader has `role` of `status`.
- Loader include fallback loading text. This text will be visible to screen readers. You can change this text with the `label` property. The fallback loading text default value is `Loading...`.
