# Code

Inline code without syntax highlight

## Import

```jsx
import { Code } from '@simplyui/react';
```

## Usage

```jsx
import { Code } from '@simplyui/react';

function Demo() {
  return <Code>npm install @simplyui/react</Code>;
}
```

## Sizes

Use the `size` property to change font size of the text inside Code. You can set the value to `xs`, `sm`, `md`, `lg`, `xl` or `inherit`. The default value is `md`.

```jsx
import { Code } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col items-start gap-y-4">
      <Code size="xs">npm install @simplyui/react</Code>
      <Code size="sm">npm install @simplyui/react</Code>
      <Code size="md">npm install @simplyui/react</Code>
      <Code size="lg">npm install @simplyui/react</Code>
      <Code size="xl">npm install @simplyui/react</Code>
      <Code size="inherit">npm install @simplyui/react</Code>
    </div>
  );
}
```

## Colors

Use the `color` property to change color of the text inside Code. You can set the value to `neutral`, `primary`, `secondary`, `info`, `success`, `warning` or `error`. The default value is `neutral`.

```jsx
import { Code } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col items-start gap-y-4">
      <Code color="neutral">npm install @simplyui/react</Code>
      <Code color="primary">npm install @simplyui/react</Code>
      <Code color="secondary">npm install @simplyui/react</Code>
      <Code color="info">npm install @simplyui/react</Code>
      <Code color="success">npm install @simplyui/react</Code>
      <Code color="warning">npm install @simplyui/react</Code>
      <Code color="error">npm install @simplyui/react</Code>
    </div>
  );
}
```

## Background Colors

Use the `backgroundColor` property to change background color of the Code. You can set the value to `neutral`, `primary`, `secondary`, `info`, `success`, `warning` or `error`. The default value is `neutral`.

```jsx
import { Code } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col items-start gap-y-4">
      <Code backgroundColor="neutral" color="neutral">
        npm install @simplyui/react
      </Code>
      <Code backgroundColor="primary" color="primary">
        npm install @simplyui/react
      </Code>
      <Code backgroundColor="secondary" color="secondary">
        npm install @simplyui/react
      </Code>
      <Code backgroundColor="info" color="info">
        npm install @simplyui/react
      </Code>
      <Code backgroundColor="success" color="success">
        npm install @simplyui/react
      </Code>
      <Code backgroundColor="warning" color="warning">
        npm install @simplyui/react
      </Code>
      <Code backgroundColor="error" color="error">
        npm install @simplyui/react
      </Code>
    </div>
  );
}
```

## Accent

Use the `accent` property to add decorative border. You can set the value to `top`, `right`, `bottom` or `left`. Color of this decorative border border is determined by `backgroundColor` property.

```jsx
import { Code } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col items-start gap-y-4">
      <Code accent="top" backgroundColor="primary" color="primary" rounded="none">
        npm install @simplyui/react
      </Code>
      <Code accent="right" backgroundColor="primary" color="primary" rounded="none">
        npm install @simplyui/react
      </Code>
      <Code accent="bottom" backgroundColor="primary" color="primary" rounded="none">
        npm install @simplyui/react
      </Code>
      <Code accent="left" backgroundColor="primary" color="primary" rounded="none">
        npm install @simplyui/react
      </Code>
    </div>
  );
}
```

## Border radius

Use the `rounded` property to change border radius value of the Code. You can set the value to `none`, `xs`, `sm`, `md`, `lg`, `xl` or `full`. The default value is `xs`.

```jsx
import { Code } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col items-start gap-y-4">
      <Code rounded="none">npm install @simplyui/react</Code>
      <Code rounded="xs">npm install @simplyui/react</Code>
      <Code rounded="sm">npm install @simplyui/react</Code>
      <Code rounded="md">npm install @simplyui/react</Code>
      <Code rounded="lg">npm install @simplyui/react</Code>
      <Code rounded="xl">npm install @simplyui/react</Code>
      <Code rounded="full">npm install @simplyui/react</Code>
    </div>
  );
}
```

## Get element ref

```tsx
import { useRef } from 'react';
import { Code } from '@simplyui/react';

function Demo() {
  const codeRef = useRef<HTMLElement>(null);

  return <Code ref={codeRef}>npm install @simplyui/react</Code>;
}
```
