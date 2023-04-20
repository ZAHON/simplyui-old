# Switch

Capture boolean input from user

## Import

```jsx
import { Switch } from '@simplyui/react';
```

## Usage

```jsx
import { Switch } from '@simplyui/react';

function Demo() {
  return <Switch />;
}
```

## Uncontrolled

If you do not need to control the state of the Switch use `defaultChecked` property to define checked of the Switch when initially rendered.

```jsx
import { Switch } from '@simplyui/react';

function Demo() {
  return <Switch defaultChecked={false} />;
}
```

## Controlled

To control Slider state use `checked` and `onChange` properties.

```jsx
import { useState } from 'react';
import { Switch } from '@simplyui/react';

function Demo() {
  const [checked, setChecked] = useState(false);

  return <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
}
```

## Disabled state

Use the `disabled` property to disable interaction and focus. When `disabled` property is set to `true` Switch has `data-disabled` attribute.

```jsx
import { Switch } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Switch disabled defaultChecked={false} />
      <Switch disabled defaultChecked={true} />
    </div>
  );
}
```

## Invalid state

Use the `invalid` property to highlight input error for the user. When `invalid` property is set to `true` Switch has `data-invalid` attribute and `aria-invalid` attribute set to `true`.

```jsx
import { Switch } from '@simplyui/react';

function Demo() {
  return <Switch invalid />;
}
```

## Required state

Use `required` property to highlight for user that input is required. When `required` property is set to `true` Switch has `aria-required` attribute set to `true`.

```jsx
import { Switch, Label } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex items-center gap-x-4">
      <Switch id="agree" />
      <Label htmlFor="agree" withRequiredIndicator>
        I agree to sell my privacy
      </Label>
    </div>
  );
}
```

## Sizes

Use the `size` property to change the size of the Switch. You can set the value to `xs`, `sm`, `md`, `lg` or `xl`. The default value is `md`.

```jsx
import { Switch } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex items-center gap-x-4">
      <Switch size="xs" />
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
      <Switch size="xl" />
    </div>
  );
}
```

## Colors

Use the `color` property to change the color of the Switch. You can set the value to `primary`, `secondary`, `info`, `success`, `warning` or `error`. The default value is `primary`.

```jsx
import { Switch } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex items-center gap-x-4">
      <Switch color="primary" defaultChecked />
      <Switch color="secondary" defaultChecked />
      <Switch color="info" defaultChecked />
      <Switch color="success" defaultChecked />
      <Switch color="warning" defaultChecked />
      <Switch color="error" defaultChecked />
    </div>
  );
}
```

## Border radius

Use the `rounded` property to change border radius of the Switch. You can set the value to `none`, `xs`, `sm`, `md`, `lg`, `xl` or `full`. The default value is `full`.

```jsx
import { Switch } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex items-center gap-x-4">
      <Switch rounded="none" />
      <Switch rounded="xs" />
      <Switch rounded="sm" />
      <Switch rounded="md" />
      <Switch rounded="lg" />
      <Switch rounded="xl" />
      <Switch rounded="full" />
    </div>
  );
}
```

## Get element ref

```tsx
import { useRef } from 'react';
import { Switch } from '@simplyui/react';

function Demo() {
  const switchRef = useRef<HTMLInputElement>(null);

  return <Switch ref={switchRef} />;
}
```

## Accessibility

Associate [Label](../label/README.md) component with Switch or provide `aria-label` property in case you use component without label for screen reader support.

```jsx
import { Switch, Label } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex items-center gap-x-4">
      <Switch id="agree" />
      <Label htmlFor="agree">I agree to everything</Label>
    </div>
  );
}
```

```jsx
import { Switch } from '@simplyui/react';

function Demo() {
  return <Switch aria-label="I agree to everything" />;
}
```
