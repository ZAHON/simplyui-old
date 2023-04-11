# Burger

Open/close navigation button

## Import

```jsx
import { Burger } from '@simplyui/react';
```

## Usage

```jsx
import { useState } from 'react';
import { Burger } from '@simplyui/react';

function Demo() {
  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close' : 'Open';

  function toggle() {
    setOpened((opened) => !opened);
  }

  return <Burger opened={opened} onClick={toggle} aria-label={label} />;
}
```

## Disabled state

Use the `disabled` property to disable interaction and focus.

```jsx
import { useState } from 'react';
import { Burger } from '@simplyui/react';

function Demo() {
  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close' : 'Open';

  function toggle() {
    setOpened((opened) => !opened);
  }

  return <Burger disabled opened={opened} onClick={toggle} aria-label={label} />;
}
```

## Sizes

Use the `size` property to change the size of the Burger. You can set the value to `xs`, `sm`, `md`, `lg` or `xl`. The default value is `md`.

```jsx
import { useState } from 'react';
import { Burger } from '@simplyui/react';

function Demo() {
  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close' : 'Open';

  function toggle() {
    setOpened((opened) => !opened);
  }

  return (
    <div className="flex items-center gap-x-4">
      <Burger size="xs" opened={opened} onClick={toggle} aria-label={label} />
      <Burger size="sm" opened={opened} onClick={toggle} aria-label={label} />
      <Burger size="md" opened={opened} onClick={toggle} aria-label={label} />
      <Burger size="lg" opened={opened} onClick={toggle} aria-label={label} />
      <Burger size="xl" opened={opened} onClick={toggle} aria-label={label} />
    </div>
  );
}
```

## Colors

Use the `color` property to change the color of the Burger. You can set the value to `neutral`, `primary`, `secondary`, `info`, `success`, `warning` or `error`. The default value is `neutral`.

```jsx
import { useState } from 'react';
import { Burger } from '@simplyui/react';

function Demo() {
  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close' : 'Open';

  function toggle() {
    setOpened((opened) => !opened);
  }

  return (
    <div className="flex gap-x-4">
      <Burger color="neutral" opened={opened} onClick={toggle} aria-label={label} />
      <Burger color="primary" opened={opened} onClick={toggle} aria-label={label} />
      <Burger color="secondary" opened={opened} onClick={toggle} aria-label={label} />
      <Burger color="info" opened={opened} onClick={toggle} aria-label={label} />
      <Burger color="success" opened={opened} onClick={toggle} aria-label={label} />
      <Burger color="warning" opened={opened} onClick={toggle} aria-label={label} />
      <Burger color="error" opened={opened} onClick={toggle} aria-label={label} />
    </div>
  );
}
```

## Variants

Use the `variant` property to change the variant of the Burger. You can set the value to `subtle` or `transparent`. The The default value is `subtle`.

```jsx
import { useState } from 'react';
import { Burger } from '@simplyui/react';

function Demo() {
  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close' : 'Open';

  function toggle() {
    setOpened((opened) => !opened);
  }

  return (
    <div className="flex gap-x-4">
      <Burger variant="subtle" opened={opened} onClick={toggle} aria-label={label} />
      <Burger variant="transparent" opened={opened} onClick={toggle} aria-label={label} />
    </div>
  );
}
```

## Icon bars

Use the `bars` property to change a number of bars in burger icon. You can set the value to `2` or `3`. The The default value is `3`.

```jsx
import { useState } from 'react';
import { Burger } from '@simplyui/react';

function Demo() {
  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close' : 'Open';

  function toggle() {
    setOpened((opened) => !opened);
  }

  return (
    <div className="flex gap-x-4">
      <Burger bars={2} opened={opened} onClick={toggle} aria-label={label} />
      <Burger bars={3} opened={opened} onClick={toggle} aria-label={label} />
    </div>
  );
}
```

## Icon size

Each size of Burger includes appropriate icon size. Use `iconSize` property to override icon size determined by `size` property. You can set the value to `xs`, `sm`, `md`, `lg` or `xl`.

```jsx
import { useState } from 'react';
import { Burger } from '@simplyui/react';

function Demo() {
  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close' : 'Open';

  function toggle() {
    setOpened((opened) => !opened);
  }

  return (
    <div className="flex gap-x-4">
      <Burger iconSize="xs" opened={opened} onClick={toggle} aria-label={label} />
      <Burger iconSize="sm" opened={opened} onClick={toggle} aria-label={label} />
      <Burger iconSize="md" opened={opened} onClick={toggle} aria-label={label} />
      <Burger iconSize="lg" opened={opened} onClick={toggle} aria-label={label} />
      <Burger iconSize="xl" opened={opened} onClick={toggle} aria-label={label} />
    </div>
  );
}
```

## Transition duration

Use the `transitionDuration` property to change the transition duration of burger icon. The The default value is `300`.

```jsx
import { useState } from 'react';
import { Burger } from '@simplyui/react';

function Demo() {
  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close' : 'Open';

  function toggle() {
    setOpened((opened) => !opened);
  }

  return <Burger transitionDuration={1000} opened={opened} onClick={toggle} aria-label={label} />;
}
```

## Border radius

Each size of Burger includes appropriate border radius value. Use `rounded` property to override border radius determined by `size` property. You can set the value to `none`, `xs`, `sm`, `md`, `lg`, `xl` or `full`.

```jsx
import { useState } from 'react';
import { Burger } from '@simplyui/react';

export function Demo() {
  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close' : 'Open';

  function toggle() {
    setOpened((opened) => !opened);
  }

  return (
    <div className="flex gap-x-4">
      <Burger rounded="none" opened={opened} onClick={toggle} aria-label={label} />
      <Burger rounded="xs" opened={opened} onClick={toggle} aria-label={label} />
      <Burger rounded="sm" opened={opened} onClick={toggle} aria-label={label} />
      <Burger rounded="md" opened={opened} onClick={toggle} aria-label={label} />
      <Burger rounded="lg" opened={opened} onClick={toggle} aria-label={label} />
      <Burger rounded="xl" opened={opened} onClick={toggle} aria-label={label} />
      <Burger rounded="full" opened={opened} onClick={toggle} aria-label={label} />
    </div>
  );
}
```

## Get button ref

```tsx
import { useState, useRef } from 'react';
import { Burger } from '@simplyui/react';

export function Demo() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close' : 'Open';

  function toggle() {
    setOpened((opened) => !opened);
  }

  return <Burger ref={buttonRef} opened={opened} onClick={toggle} aria-label={label} />;
}
```

## Accessibility

Burger renders a regular button element with icon. Include `title` or `aria-label` properties for screen reader support.

```jsx
import { useState } from 'react';
import { Burger } from '@simplyui/react';

function Demo() {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close' : 'Open';

  function toggle() {
    setOpened((opened) => !opened);
  }

  return <Burger title={title} opened={opened} onClick={toggle} />;
}
```

```jsx
import { useState } from 'react';
import { Burger } from '@simplyui/react';

function Demo() {
  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close' : 'Open';

  function toggle() {
    setOpened((opened) => !opened);
  }

  return <Burger aria-label={label} opened={opened} onClick={toggle} />;
}
```
