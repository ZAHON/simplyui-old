# Slider

The Slider is used to allow users to make selections from a range of values.

## Import

```jsx
import { Slider } from '@simplyui/react';
```

## Usage

```jsx
import { Slider } from '@simplyui/react';

function Demo() {
  return <Slider defaultValue={40} />;
}
```

## Controlled

```jsx
import { useState } from 'react';
import { Slider } from '@simplyui/react';

function Demo() {
  const [value, setValue] = useState(40);

  return <Slider value={value} onChange={setValue} />;
}
```

## onChangeEnd

Event handler `onChangeEnd` called when the value changes at the end of an interaction. Useful when you only need to capture a final value e.g. to update a backend service.

```jsx
import { useState } from 'react';
import { Slider } from '@simplyui/react';

function Demo() {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);

  return (
    <div className="flex flex-col gap-y-2">
      <Slider value={value} onChange={setValue} onChangeEnd={setEndValue} />
      <p>
        onChange value: <strong>{value}</strong>
      </p>
      <p>
        onChangeEnd value: <strong>{endValue}</strong>
      </p>
    </div>
  );
}
```

## Sizes

Pass the `size` prop to change the size of the slider component. The default size is `"md"`.

The following values are allowed:

- `"xs"`
- `"sm"`
- `"md"`
- `"lg"`
- `"xl"`

```jsx
import { Slider } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Slider size="xs" defaultValue={10} />
      <Slider size="sm" defaultValue={20} />
      <Slider size="md" defaultValue={30} />
      <Slider size="lg" defaultValue={40} />
      <Slider size="xl" defaultValue={50} />
    </div>
  );
}
```

## Colors

Pass the `color` prop to change the color of the slider component. The default color is `"primary"`.

The following values are allowed:

- `"primary"`
- `"secondary"`
- `"success"`
- `"warning"`
- `"error"`

```jsx
import { Slider } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Slider color="primary" defaultValue={10} />
      <Slider color="secondary" defaultValue={20} />
      <Slider color="success" defaultValue={30} />
      <Slider color="warning" defaultValue={40} />
      <Slider color="error" defaultValue={50} />
    </div>
  );
}
```

## Disabled

Pass the `disabled` prop to put the slider component in a disabled state.

```jsx
import { Slider } from '@simplyui/react';

function Demo() {
  return <Slider disabled defaultValue={60} />;
}
```

## Rounded

Pass `rounded` prop to change border radius value of the slider component.

The following values are allowed:

- `"none"`

```jsx
import { Slider } from '@simplyui/react';

function Demo() {
  return <Slider rounded="none" defaultValue={60} />;
}
```

## Thumb icon

Pass `thumbIcon` prop to render icon or any react component inside slider thumb.

```jsx
import { Slider } from '@simplyui/react';

function Demo() {
  return <Slider thumbIcon={<ArrowsIcon />} defaultValue={60} />;
}

function ArrowsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M13.2 2.24a.75.75 0 00.04 1.06l2.1 1.95H6.75a.75.75 0 000 1.5h8.59l-2.1 1.95a.75.75 0 101.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 00-1.06.04zm-6.4 8a.75.75 0 00-1.06-.04l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 101.02-1.1l-2.1-1.95h8.59a.75.75 0 000-1.5H4.66l2.1-1.95a.75.75 0 00.04-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}
```

## Label behavior

Pass showLabel prop to change the slider label behavior. The default value of this prop is `on-hover`.

The following values are allowed:

- `"always"` - label will always be displayed
- `"on-hover"` - label will be displayed when user hover or focus slider component
- `"none"` - label will not be visible

```jsx
import { Slider } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Slider showLabel="always" defaultValue={20} />
      <Slider showLabel="on-hover" defaultValue={40} />
      <Slider showLabel="none" defaultValue={60} />
    </div>
  );
}
```

## Label content

Pass `label` prop to generate label or any react node to render instead.

```jsx
import { Slider } from '@simplyui/react';

function Demo() {
  return <Slider label={(value) => `${value} %`} defaultValue={20} />;
}
```
