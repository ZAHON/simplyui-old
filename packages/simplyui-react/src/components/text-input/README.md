# Label

Capture string input from user

## Import

```jsx
import { TextInput } from '@simplyui/react';
```

## Usage

```jsx
import { TextInput } from '@simplyui/react';

function Demo() {
  return <TextInput placeholder="Your name" />;
}
```

## Controlled

```jsx
import { useState } from 'react';
import { TextInput } from '@simplyui/react';

function Demo() {
  const [value, setValue] = useState('Konrad');

  return <TextInput value={value} onChange={(e) => setValue(e.target.value)} placeholder="Your name" />;
}
```

## Disabled state

Use the `disabled` property to disable interaction and focus. When `disabled` property is set to `true` TextInput has `data-disabled` attribute.

```jsx
import { TextInput } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <TextInput disabled defaultValue="Konrad" />
      <TextInput disabled placeholder="Your name" />
    </div>
  );
}
```

## Invalid state

Use the `invalid` property to highlight input error for the user. When `invalid` property is set to `true` TextInput has `data-invalid` attribute and `aria-invalid` attribute set to `true`.

```jsx
import { TextInput } from '@simplyui/react';

function Demo() {
  return <TextInput invalid placeholder="Your name" />;
}
```

## Required state

Use `required` property to highlight for user that input is required. When `required` property is set to `true` TextInput has `aria-required` attribute set to `true`.

```jsx
import { TextInput, Label } from '@simplyui/react';

function Demo() {
  return (
    <div>
      <Label withRequiredIndicator htmlFor="name">
        Full name
      </Label>
      <TextInput required id="name" placeholder="Your name" />
    </div>
  );
}
```

## Sizes

Use the `size` property to change the size of the TextInput. You can set the value to `xs`, `sm`, `md`, `lg` or `xl`. The default value is `md`.

```jsx
import { TextInput } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <TextInput size="xs" placeholder="Size xs" />
      <TextInput size="sm" placeholder="Size sm" />
      <TextInput size="md" placeholder="Size md" />
      <TextInput size="lg" placeholder="Size lg" />
      <TextInput size="xl" placeholder="Size xl" />
    </div>
  );
}
```

## Variants

Use the `variant` property to change the variant of the TextInput. You can set the value to `filled`, `outline` or `underlined`. The The default value is `filled`.

```jsx
import { TextInput } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <TextInput variant="filled" placeholder="Variant filled" />
      <TextInput variant="outline" placeholder="Variant outline" />
      <TextInput variant="underlined" placeholder="Variant underlined" />
    </div>
  );
}
```

## Colors

Use the `color` property to change the color of the text inside TextInput. You can set the value to `neutral`, `primary`, `secondary`, `info`, `success`, `warning` or `error`. The default value is `neutral`.

```jsx
import { TextInput } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <TextInput color="neutral" defaultValue="Color neutral" />
      <TextInput color="primary" defaultValue="Color primary" />
      <TextInput color="secondary" defaultValue="Color secondary" />
      <TextInput color="info" defaultValue="Color info" />
      <TextInput color="success" defaultValue="Color success" />
      <TextInput color="warning" defaultValue="Color warning" />
      <TextInput color="error" defaultValue="Color error" />
    </div>
  );
}
```

## Placeholder colors

Use the `placeholderColor` property to change the color of the placeholder. You can set the value to `neutral`, `primary`, `secondary`, `info`, `success`, `warning` or `error`. The default value is `neutral`.

```jsx
import { TextInput } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <TextInput placeholderColor="neutral" placeholder="Placeholder color neutral" />
      <TextInput placeholderColor="primary" placeholder="Placeholder color primary" />
      <TextInput placeholderColor="secondary" placeholder="Placeholder color secondary" />
      <TextInput placeholderColor="info" placeholder="Placeholder color info" />
      <TextInput placeholderColor="success" placeholder="Placeholder color success" />
      <TextInput placeholderColor="warning" placeholder="Placeholder color warning" />
      <TextInput placeholderColor="error" placeholder="Placeholder color error" />
    </div>
  );
}
```

## Focus border colors

Use the `focusBorderColor` property to change the border color when the TextInput is focused. You can set the value to `neutral`, `primary`, `secondary`, `info`, `success`, `warning` or `error`. The default value is `primary`.

```jsx
import { TextInput } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <TextInput focusBorderColor="neutral" placeholder="Focus border color neutral" />
      <TextInput focusBorderColor="primary" placeholder="Focus border color primary" />
      <TextInput focusBorderColor="secondary" placeholder="Focus border color secondary" />
      <TextInput focusBorderColor="info" placeholder="Focus border color info" />
      <TextInput focusBorderColor="success" placeholder="Focus border color success" />
      <TextInput focusBorderColor="warning" placeholder="Focus border color warning" />
      <TextInput focusBorderColor="error" placeholder="Focus border color error" />
    </div>
  );
}
```

## Border radius

Each size of TextInput includes appropriate border radius value. Use `rounded` property to override border radius determined by `size` property. You can set the value to `none`, `xs`, `sm`, `md`, `lg`, `xl` or `full`.

```jsx
import { TextInput } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <TextInput rounded="none" placeholder="Rounded none" />
      <TextInput rounded="xs" placeholder="Rounded xs" />
      <TextInput rounded="sm" placeholder="Rounded sm" />
      <TextInput rounded="md" placeholder="Rounded md" />
      <TextInput rounded="lg" placeholder="Rounded lg" />
      <TextInput rounded="xl" placeholder="Rounded xl" />
      <TextInput rounded="full" placeholder="Rounded full" />
    </div>
  );
}
```

## Add elements inside TextInput

In some scenarios, you might need to add an icon or another component inside the TextInput component. The examples below demonstrate how to do this.

### TextInput with left section

```jsx
import { TextInput } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="relative">
        <div className="h-10 w-10 absolute top-0 left-0 flex justify-center items-center pointer-events-none text-neutral-11">
          <CurrencyDollarIcon />
        </div>
        <TextInput variant="filled" placeholder="Enter amount" className="pl-10" />
      </div>
      <div className="relative">
        <div className="h-10 w-10 absolute top-0 left-0 flex justify-center items-center pointer-events-none text-neutral-11">
          <CurrencyDollarIcon />
        </div>
        <TextInput variant="outline" placeholder="Enter amount" className="pl-10" />
      </div>
      <div className="relative">
        <div className="h-10 w-10 absolute top-0 left-0 flex justify-center items-center pointer-events-none text-neutral-11">
          <CurrencyDollarIcon />
        </div>
        <TextInput variant="underlined" placeholder="Enter amount" className="pl-10" />
      </div>
    </div>
  );
}

function CurrencyDollarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" focusable="false" aria-hidden="true" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
```

### TextInput with right section

```jsx
import { TextInput } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="relative">
        <TextInput variant="filled" placeholder="User name" className="pr-10" />
        <div className="h-10 w-10 absolute top-0 right-0 flex justify-center items-center pointer-events-none text-neutral-11">
          <UserCircleIcon />
        </div>
      </div>
      <div className="relative">
        <TextInput variant="outline" placeholder="User name" className="pr-10" />
        <div className="h-10 w-10 absolute top-0 right-0 flex justify-center items-center pointer-events-none text-neutral-11">
          <UserCircleIcon />
        </div>
      </div>
      <div className="relative">
        <TextInput variant="underlined" placeholder="User name" className="pr-10" />
        <div className="h-10 w-10 absolute top-0 right-0 flex justify-center items-center pointer-events-none text-neutral-11">
          <UserCircleIcon />
        </div>
      </div>
    </div>
  );
}

function UserCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" focusable="false" aria-hidden="true" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
```

## Left and Right Addons

Examples how to add addons to the left and right of the TextInput component.

```jsx
import { TextInput } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex">
        <span className="flex justify-center items-center px-2.5 bg-neutral-7 text-md text-neutral-12 rounded-l-md">+234</span>
        <TextInput variant="filled" placeholder="phone number" className="rounded-l-none" />
      </div>
      <div className="flex">
        <TextInput variant="filled" placeholder="mysite" className="rounded-r-none" />
        <span className="flex justify-center items-center px-2.5 bg-neutral-7 text-md text-neutral-12 rounded-r-md">.com</span>
      </div>
      <div className="flex">
        <span className="flex justify-center items-center px-2.5 bg-neutral-7 text-md text-neutral-12 rounded-l-md">www</span>
        <TextInput variant="filled" placeholder="mysite" className="rounded-l-none rounded-r-none" />
        <span className="flex justify-center items-center px-2.5 bg-neutral-7 text-md text-neutral-12 rounded-r-md">.com</span>
      </div>
    </div>
  );
}
```

```jsx
import { TextInput } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex">
        <span className="flex justify-center items-center px-2.5 bg-neutral-7 text-md text-neutral-12 rounded-l-md">+234</span>
        <TextInput variant="outline" placeholder="phone number" className="rounded-l-none" />
      </div>
      <div className="flex">
        <TextInput variant="outline" placeholder="mysite" className="rounded-r-none" />
        <span className="flex justify-center items-center px-2.5 bg-neutral-7 text-md text-neutral-12 rounded-r-md">.com</span>
      </div>
      <div className="flex">
        <span className="flex justify-center items-center px-2.5 bg-neutral-7 text-md text-neutral-12 rounded-l-md">www</span>
        <TextInput variant="outline" placeholder="mysite" className="rounded-l-none rounded-r-none" />
        <span className="flex justify-center items-center px-2.5 bg-neutral-7 text-md text-neutral-12 rounded-r-md">.com</span>
      </div>
    </div>
  );
}
```

```jsx
import { TextInput } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex">
        <span className="flex justify-center items-center px-2.5 bg-neutral-7 text-md text-neutral-12">+234</span>
        <TextInput variant="underlined" placeholder="phone number" />
      </div>
      <div className="flex">
        <TextInput variant="underlined" placeholder="mysite" />
        <span className="flex justify-center items-center px-2.5 bg-neutral-7 text-md text-neutral-12">.com</span>
      </div>
      <div className="flex">
        <span className="flex justify-center items-center px-2.5 bg-neutral-7 text-md text-neutral-12">www</span>
        <TextInput variant="underlined" placeholder="mysite" />
        <span className="flex justify-center items-center px-2.5 bg-neutral-7 text-md text-neutral-12">.com</span>
      </div>
    </div>
  );
}
```

## Get input ref

```tsx
import { useRef } from 'react';
import { TextInput } from '@simplyui/react';

function Demo() {
  const inputRef = useRef<HTMLInputElement>(null);

  return <TextInput ref={inputRef} placeholder="Your name" />;
}
```
