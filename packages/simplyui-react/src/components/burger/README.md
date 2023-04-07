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
  const label = opened ? 'Close navigation' : 'Open navigation';

  function toggle() {
    setOpened((opened) => !opened);
  }

  return <Burger opened={opened} onClick={toggle} aria-label={label} />;
}
```

## Sizes

Use the `size` property to change the size of the Burger. You can set the value to `xs`, `sm`, `md`, `lg`, `xl` or `inherit`. The default value is `md`.

```jsx
import { useState } from 'react';
import { Burger } from '@simplyui/react';

function Demo() {
  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

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

Use the `color` property to change color of the Burger icon bars. You can set the value to `text`, `neutral`, `primary`, `secondary`, `info`, `success`, `warning` or `error`. The default value is `text`.

```jsx
import { useState } from 'react';
import { Burger } from '@simplyui/react';

function Demo() {
  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  function toggle() {
    setOpened((opened) => !opened);
  }

  return (
    <div className="flex items-center gap-x-4">
      <Burger color="text" opened={opened} onClick={toggle} aria-label={label} />
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

## Border radius of the burger icon bars

If you want to Burger icon bars will be rounded add `roundedIconBars` property. The default value of this property is `true`.

```jsx
import { useState } from 'react';
import { Burger } from '@simplyui/react';

function Demo() {
  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  function toggle() {
    setOpened((opened) => !opened);
  }

  return (
    <div className="flex gap-x-4">
      <Burger roundedIconBars={false} size="xl" opened={opened} onClick={toggle} aria-label={label} />
      <Burger roundedIconBars={true} size="xl" opened={opened} onClick={toggle} aria-label={label} />
    </div>
  );
}
```

## Transition duration

Use the `transitionDuration` property to change transition duration of the Burger icon bars. The default value is `300`.

```jsx
import { useState } from 'react';
import { Burger } from '@simplyui/react';

function Demo() {
  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  function toggle() {
    setOpened((opened) => !opened);
  }

  return <Burger transitionDuration={100} opened={opened} onClick={toggle} aria-label={label} />;
}
```

## Get burger ref

```tsx
import { useState, useRef } from 'react';
import { Burger } from '@simplyui/react';

function Demo() {
  const burgerRef = useRef<HTMLButtonElement>(null);
  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  function toggle() {
    setOpened((opened) => !opened);
  }

  return <Burger ref={burgerRef} opened={opened} onClick={toggle} aria-label={label} />;
}
```

## Accessibility

Burger renders a regular button element of type `button`. Include `title` or `aria-label` properties for screen reader support.

```jsx
import { useState } from 'react';
import { Burger } from '@simplyui/react';

function Demo() {
  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  function toggle() {
    setOpened((opened) => !opened);
  }

  return <Burger aria-label={label} opened={opened} onClick={toggle} />;
}
```

```jsx
import { useState } from 'react';
import { Burger } from '@simplyui/react';

function Demo() {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  function toggle() {
    setOpened((opened) => !opened);
  }

  return <Burger title={title} opened={opened} onClick={toggle} />;
}
```
