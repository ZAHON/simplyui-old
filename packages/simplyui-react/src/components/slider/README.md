# Slider

Capture user feedback from a range of value

## Import

```jsx
import { Slider } from '@simplyui/react';
```

## Usage

```jsx
import { Slider } from '@simplyui/react';

function Demo() {
  return <Slider defaultValue={50} />;
}
```

## Uncontrolled

If you do not need to control the state of the Slider use `defaultValue` property to define value of the Slider when initially rendered.

```jsx
import { Slider } from '@simplyui/react';

function Demo() {
  return <Slider defaultValue={50} />;
}
```

## Controlled

To control Slider state use `value` and `onChange` properties.

```jsx
import { useState } from 'react';
import { Slider } from '@simplyui/react';

function Demo() {
  const [value, setValue] = useState(50);

  return <Slider value={value} onChange={setValue} />;
}
```

## Disabled state

Use the `disabled` property to disable interaction and focus.

```jsx
import { Slider } from '@simplyui/react';

function Demo() {
  return <Slider disabled defaultValue={50} />;
}
```

## onChangeEnd

Event handler `onChangeEnd` is called when the value changes at the end of an interaction.

```jsx
import { useState } from 'react';
import { Slider } from '@simplyui/react';

function Demo() {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);

  return (
    <div className="flex flex-col gap-y-2">
      <Slider value={value} onChange={setValue} onChangeEnd={setEndValue} />
      <p>onChange value: {value}</p>
      <p>onChangeEnd value: {endValue}</p>
    </div>
  );
}
```

## Min, max and step

```jsx
import { useState } from 'react';

function Demo() {
  return <Slider min={-5.5} max={5.5} step={0.1} defaultValue={3.4} />;
}
```

## Orientation

Use the `orientation` property to change the orientation of the Slider. You can set the value to `horizontal` or `vertical`. The default value is `horizontal`.

```jsx
import { Slider } from '@simplyui/react';

function Demo() {
  return <Slider orientation="horizontal" defaultValue={50} />;
}
```

```jsx
import { Slider } from '@simplyui/react';

function Demo() {
  return (
    <div className="h-32 flex justify-center">
      <Slider orientation="vertical" defaultValue={50} />
    </div>
  );
}
```

## Colors

Use the `color` property to change the color of the Slider. You can set the value to `primary`, `secondary`, `info`, `success`, `warning` or `error`. The default value is `primary`.

```jsx
import { Slider } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Slider color="primary" defaultValue={20} />
      <Slider color="secondary" defaultValue={30} />
      <Slider color="info" defaultValue={40} />
      <Slider color="success" defaultValue={50} />
      <Slider color="warning" defaultValue={60} />
      <Slider color="error" defaultValue={70} />
    </div>
  );
}
```

## Sizes

Use the `size` property to change the size of the Slider. You can set the value to `xs`, `sm`, `md`, `lg` or `xl`. The default value is `md`.

```jsx
import { Slider } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Slider size="xs" defaultValue={20} />
      <Slider size="sm" defaultValue={30} />
      <Slider size="md" defaultValue={40} />
      <Slider size="lg" defaultValue={50} />
      <Slider size="xl" defaultValue={60} />
    </div>
  );
}
```

## Inverted

Use the `inverted` property to visually inverted Slider.

```jsx
import { Slider } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Slider defaultValue={80} />
      <Slider inverted defaultValue={80} />
    </div>
  );
}
```

## Range visibility

You can control visibility of the Slider range by `showRange` property. The default value of this property is `true`.

```jsx
import { Slider } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Slider showRange={true} defaultValue={50} />
      <Slider showRange={false} defaultValue={50} />
    </div>
  );
}
```

## Get element ref

```tsx
import { useRef } from 'react';
import { Slider } from '@simplyui/react';

function Demo() {
  const sliderRef = useRef<HTMLSpanElement>(null);

  return <Slider ref={sliderRef} defaultValue={50} />;
}
```

## Accessibility

Use `thumbLabel` property to add label for screen readers.

```jsx
import { Slider } from '@simplyui/react';

function Demo() {
  return <Slider thumbLabel="Thumb aria-label" defaultValue={50} />;
}
```

### Keyboard interactions

| Key                 | Description                                                           |
| ------------------- | --------------------------------------------------------------------- |
| `ArrowRight`        | Increments/decrements by the `step` value depending on `orientation`. |
| `ArrowLeft`         | Increments/decrements by the `step` value depending on `orientation`. |
| `ArrowUp`           | Increases the value by the `step` amount.                             |
| `ArrowDown`         | Decreases the value by the `step` amount.                             |
| `PageUp`            | Increases the value by a larger `step`.                               |
| `PageDown`          | Decreases the value by a larger `step`.                               |
| `Shift + ArrowUp`   | Increases the value by a larger `step`.                               |
| `Shift + ArrowDown` | Decreases the value by a larger `step`.                               |
| `Home`              | Sets the value to its minimum.                                        |
| `End`               | Sets the value to its maximum.                                        |
