# Switch

A control that allows the user to toggle between checked and not checked.

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

## Controlled

```jsx
import { useState } from 'react';
import { Switch } from '@simplyui/react';

function Demo() {
  const [checked, setChecked] = useState(false);

  return <Switch checked={checked} onChange={(e) => setChecked(e.currentTarget.checked)} />;
}
```

## Label

Pass the `label` prop to set label of switch.

```jsx
import { Switch } from '@simplyui/react';

function Demo() {
  return <Switch label="Switch label" />;
}
```

## Description

Pass the `description` prop to set message that tells users more details about the switch functionality.

```jsx
import { Switch } from '@simplyui/react';

function Demo() {
  return <Switch description="Switch description" />;
}
```

## Error Message

Pass the `errorMessage` prop to set message that shows up when an error occurs. This message will only show up when the prop `invalid` is `true`.

```jsx
import { Switch } from '@simplyui/react';

function Demo() {
  return <Switch invalid errorMessage="Switch error message" />;
}
```

## States

### Disabled

```jsx
import { Switch } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Switch defaultChecked={false} disabled label="Not checked disabled" />
      <Switch defaultChecked={true} disabled label="Checked disabled" />
    </div>
  );
}
```

### Invalid

```jsx
import { Switch } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Switch
        defaultChecked={false}
        invalid
        label="Not checked invalid"
        errorMessage="Switch error message"
      />
      <Switch
        defaultChecked={true}
        invalid
        label="Checked invalid"
        errorMessage="Switch error message"
      />
    </div>
  );
}
```

### Required

```jsx
import { Switch } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Switch defaultChecked={false} required label="Not checked required" />
      <Switch defaultChecked={true} required label="Checked required" />
    </div>
  );
}
```

## Variants

Pass the `variant` prop to change the variant of the switch. The default is `filled`.

```jsx
import { Switch } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Switch variant="filled" label="Switch variant filled" />
      <Switch variant="outline" label="Switch variant outline" />
    </div>
  );
}
```

## Sizes

Pass the `size` prop to change the size of the switch. Size defines label font-size, input height and width. The default is `md`.

```jsx
import { Switch } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Switch size="xs" label="Switch size xs" />
      <Switch size="sm" label="Switch size sm" />
      <Switch size="md" label="Switch size md" />
      <Switch size="lg" label="Switch size lg" />
      <Switch size="xl" label="Switch size xl" />
    </div>
  );
}
```

## Colors

Pass the `color` prop to change the color of the switch. The default is `primary`.

```jsx
import { Switch } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Switch color="primary" defaultChecked label="Switch color primary" />
      <Switch color="secondary" defaultChecked label="Switch color secondary" />
      <Switch color="success" defaultChecked label="Switch color success" />
      <Switch color="warning" defaultChecked label="Switch color warning" />
      <Switch color="error" defaultChecked label="Switch color error" />
    </div>
  );
}
```

## Get input ref

```tsx
import { useRef } from 'react';
import { Switch } from '@simplyui/react';

function Demo() {
  const inputRef = useRef<HTMLInputElement>(null);

  return <Switch ref={inputRef} />;
}
```

## Accessibility

Switch is a regular input with checkbox type. Provide `aria-label` if switch is used without label.

```jsx
import { Switch } from '@simplyui/react';

function Demo() {
  return <Switch aria-label="Switch aria-label" />;
}
```
