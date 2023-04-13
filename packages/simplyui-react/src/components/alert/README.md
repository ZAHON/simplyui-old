# Alert

Attract user attention with important static message

## Import

```jsx
import { Alert } from '@simplyui/react';
```

## Usage

```jsx
import { Alert } from '@simplyui/react';

function Demo() {
  return <Alert title="Bummer!">Something terrible happened! You made a mistake and there is no going back, your data was lost forever!</Alert>;
}
```

## Sizes

Use the `size` property to change font size of the text inside Alert. You can set the value to `xs`, `sm`, `md`, `lg` or `xl`. The default value is `md`.

```jsx
import { Alert } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Alert size="xs" title="Your browser is outdated!">
        Your experience may be degraded.
      </Alert>
      <Alert size="sm" title="Your browser is outdated!">
        Your experience may be degraded.
      </Alert>
      <Alert size="md" title="Your browser is outdated!">
        Your experience may be degraded.
      </Alert>
      <Alert size="lg" title="Your browser is outdated!">
        Your experience may be degraded.
      </Alert>
      <Alert size="xl" title="Your browser is outdated!">
        Your experience may be degraded.
      </Alert>
    </div>
  );
}
```

## Colors

Use the `color` property to change the color of the Alert. You can set the value to `neutral`, `primary`, `secondary`, `info`, `success`, `warning` or `error`. The default value is `error`.

```jsx
import { Alert } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Alert color="neutral" title="Your browser is outdated!">
        Your experience may be degraded.
      </Alert>
      <Alert color="primary" title="Your browser is outdated!">
        Your experience may be degraded.
      </Alert>
      <Alert color="secondary" title="Your browser is outdated!">
        Your experience may be degraded.
      </Alert>
      <Alert color="info" title="Your browser is outdated!">
        Your experience may be degraded.
      </Alert>
      <Alert color="success" title="Your browser is outdated!">
        Your experience may be degraded.
      </Alert>
      <Alert color="warning" title="Your browser is outdated!">
        Your experience may be degraded.
      </Alert>
      <Alert color="error" title="Your browser is outdated!">
        Your experience may be degraded.
      </Alert>
    </div>
  );
}
```

## Variants

Use the `variant` property to change the variant of the Alert. You can set the value to `filled`, `light` or `outline`. The default value is `light`.

```jsx
import { Alert } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Alert variant="filled" title="Your browser is outdated!">
        Your experience may be degraded.
      </Alert>
      <Alert variant="light" title="Your browser is outdated!">
        Your experience may be degraded.
      </Alert>
      <Alert variant="outline" title="Your browser is outdated!">
        Your experience may be degraded.
      </Alert>
    </div>
  );
}
```

## Light variant accent

Use the `accent` property to add decorative border. You can set the value to `top`, `right`, `bottom` or `left`. Color of this decorative border border is determined by `color` property. This property is only available when `variant` property is set to `light`.

```jsx
import { Alert } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Alert accent="top" variant="light" color="success" rounded="none" title="Application submitted!">
        Thanks for submitting your application. Our team will get back to you soon.
      </Alert>
      <Alert accent="right" variant="light" color="success" rounded="none" title="Application submitted!">
        Thanks for submitting your application. Our team will get back to you soon.
      </Alert>
      <Alert accent="bottom" variant="light" color="success" rounded="none" title="Application submitted!">
        Thanks for submitting your application. Our team will get back to you soon.
      </Alert>
      <Alert accent="left" variant="light" color="success" rounded="none" title="Application submitted!">
        Thanks for submitting your application. Our team will get back to you soon.
      </Alert>
    </div>
  );
}
```

## Border radius

Use the `rounded` property to change border radius value of the Code. You can set the value to `none`, `xs`, `sm`, `md`, `lg` or `xl`. The default value is `md`.

```jsx
import { Alert } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Alert rounded="none" color="info" title="Well done!">
        You successfully read this important alert message.
      </Alert>
      <Alert rounded="xs" color="info" title="Well done!">
        You successfully read this important alert message.
      </Alert>
      <Alert rounded="sm" color="info" title="Well done!">
        You successfully read this important alert message.
      </Alert>
      <Alert rounded="md" color="info" title="Well done!">
        You successfully read this important alert message.
      </Alert>
      <Alert rounded="lg" color="info" title="Well done!">
        You successfully read this important alert message.
      </Alert>
      <Alert rounded="xl" color="info" title="Well done!">
        You successfully read this important alert message.
      </Alert>
    </div>
  );
}
```

## Icon

Use `icon` property to add icon or decorative element before the Alert content.

```jsx
import { Alert } from '@simplyui/react';

function Demo() {
  return (
    <Alert icon={<ExclamationIcon />} color="warning" title="Alert!">
      Do not forget to save your data.
    </Alert>
  );
}

function ExclamationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  );
}
```

## Close button

Use `closeButton` property to add close button inside Alert.

```jsx
import { useState } from 'react';
import { Alert, Button } from '@simplyui/react';

function Demo() {
  const [isOpen, setIsOpen] = useState(true);

  if (isOpen) {
    return (
      <Alert closeButton closeButtonLabel="Close alert" onClose={() => setIsOpen(false)} variant="outline" color="success" title="Success!">
        Your application has been received. We will review your application and respond within the next 48 hours.
      </Alert>
    );
  }

  return <Button onClick={() => setIsOpen(true)}>Show Alert</Button>;
}
```

## Get element ref

```tsx
import { useRef } from 'react';
import { Alert } from '@simplyui/react';

function Demo() {
  const alertRef = useRef<HTMLDivElement>(null);

  return <Alert ref={alertRef}>There was an error processing your request</Alert>;
}
```

## Accessibility

- Progress has `role` of `alert`.
- If you add close button remember to also add `closeButtonLabel` property to make close button visible for screen readers. The default value of the `closeButtonLabel` property is `Close alert`.

```jsx
import { Alert } from '@simplyui/react';

function Demo() {
  return (
    <Alert closeButton closeButtonLabel="Close warning" color="warning">
      Do not forget to save your data.
    </Alert>
  );
}
```
