# Button

Buttons allow users to perform actions.

## Import

```jsx
import { Button } from '@simplyui/react';
```

## Usage

```jsx
import { Button } from '@simplyui/react';

function Demo() {
  return <Button>Button</Button>;
}
```

## Disabled state

Use the `disabled` property to disable interaction and focus. When `disabled` property is set to `true` Button has `data-disabled` attribute.

```jsx
import { Button } from '@simplyui/react';

function Demo() {
  return <Button disabled>Disabled button</Button>;
}
```

## Loading state

Use the `loading` property to show the Button loading state. In this state [Loader](../loader/README.md) component replaces left or right icon and Button becomes disabled. When `loading` property is set to `true` Button has `data-loading` attribute.

```jsx
import { Button } from '@simplyui/react';

function Demo() {
  return <Button loading>Fetch data</Button>;
}
```

### Loading content

You can change the Button content when is in loading state with `loadingContent` property.

```jsx
import { Button } from '@simplyui/react';

function Demo() {
  return (
    <Button loadingContent="Submitting" loading>
      Submit
    </Button>
  );
}
```

### Loader position

Use the `loaderPosition` property to change [Loader](../loader/README.md) component position relative to Button content. You can set the value to `left` or `right`. The default value is `left`.

```jsx
import { Button } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex gap-x-4">
      <Button loaderPosition="left" loading>
        Fetch data
      </Button>
      <Button loaderPosition="right" loading>
        Fetch data
      </Button>
    </div>
  );
}
```

### Control the [Loader](../loader/README.md) component

You can control the [Loader](../loader/README.md) component with `loaderProps` property.

```jsx
import { Button } from '@simplyui/react';

function Demo() {
  return (
    <Button loaderProps={{ variant: 'border', color: 'warning', speedSafe: 1000 }} loading>
      Fetch data
    </Button>
  );
}
```

### Replace default [Loader](../loader/README.md) component

You can replace default loader component with `loader` property.

```jsx
import { Button } from '@simplyui/react';

function Demo() {
  return (
    <Button loader={<CustomLoader />} loading>
      Fetch data
    </Button>
  );
}

function CustomLoader() {
  return (
    <div role="status" className="h-4 w-4 bg-current animate-[pulse_750ms_ease-in-out_infinite] rounded-full">
      <span className="sr-only">Loading...</span>
    </div>
  );
}
```

## Sizes

Use the `size` property to change the size of the Button. You can set the value to `xs`, `sm`, `md`, `lg` or `xl`. The default value is `md`.

```jsx
import { Button } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex items-center gap-x-4">
      <Button size="xs">Button</Button>
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
      <Button size="xl">Button</Button>
    </div>
  );
}
```

## Colors

Use the `color` property to change the color of the Button. You can set the value to `neutral`, `primary`, `secondary`, `info`, `success`, `warning` or `error`. The default value is `primary`.

```jsx
import { Button } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex items-center flex-wrap gap-4">
      <Button color="neutral">Neutral</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="error">Error</Button>
    </div>
  );
}
```

## Variants

Use the `variant` property to change the variant of the Button. You can set the value to `filled`, `light`, `outline` or `subtle`. The default value is `filled`.

```jsx
import { Button } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex items-center gap-x-4">
      <Button variant="filled" color="primary">
        Filled variant
      </Button>
      <Button variant="light" color="primary">
        Light variant
      </Button>
      <Button variant="outline" color="primary">
        Outline variant
      </Button>
      <Button variant="subtle" color="primary">
        Subtle variant
      </Button>
    </div>
  );
}
```

## Full width

Button can take full width of container if you set `fullWidth` property.

```jsx
import { Button } from '@simplyui/react';

function Demo() {
  return <Button fullWidth>Full width button</Button>;
}
```

## Border radius

Each size of Button includes appropriate border radius value. Use `rounded` property to override border radius determined by `size` property. You can set the value to `none`, `xs`, `sm`, `md`, `lg`, `xl` or `full`.

```jsx
import { Button } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <Button rounded="none">Rounded none</Button>
      <Button rounded="xs">Rounded xs</Button>
      <Button rounded="sm">Rounded sm</Button>
      <Button rounded="md">Rounded md</Button>
      <Button rounded="lg">Rounded lg</Button>
      <Button rounded="xl">Rounded xl</Button>
      <Button rounded="full">Rounded full</Button>
    </div>
  );
}
```

## Left icon

Use `leftIcon` property to add icon or decorative element before the button's content.

```jsx
import { Button } from '@simplyui/react';

function Demo() {
  return <Button leftIcon={<WrenchIcon />}>Settings</Button>;
}

function WrenchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" focusable="false" aria-hidden="true" className="w-4 h-4">
      <path fillRule="evenodd" d="M19 5.5a4.5 4.5 0 01-4.791 4.49c-.873-.055-1.808.128-2.368.8l-6.024 7.23a2.724 2.724 0 11-3.837-3.837L9.21 8.16c.672-.56.855-1.495.8-2.368a4.5 4.5 0 015.873-4.575c.324.105.39.51.15.752L13.34 4.66a.455.455 0 00-.11.494 3.01 3.01 0 001.617 1.617c.17.07.363.02.493-.111l2.692-2.692c.241-.241.647-.174.752.15.14.435.216.9.216 1.382zM4 17a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
  );
}
```

## Right icon

Use `rightIcon` property to add icon or decorative element after the button's content.

```jsx
import { Button } from '@simplyui/react';

function Demo() {
  return <Button rightIcon={<PhoneIcon />}>Call us</Button>;
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" focusable="false" aria-hidden="true" className="w-4 h-4">
      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
    </svg>
  );
}
```

## Get button ref

```tsx
import { useRef } from 'react';
import { Button } from '@simplyui/react';

function Demo() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return <Button ref={buttonRef}>Button</Button>;
}
```
