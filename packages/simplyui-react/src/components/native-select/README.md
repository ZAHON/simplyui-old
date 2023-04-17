# NativeSelect

Capture user feedback limited to large set of options

## Import

```jsx
import { NativeSelect } from '@simplyui/react';
```

## Usage

```jsx
import { NativeSelect } from '@simplyui/react';

function Demo() {
  return (
    <NativeSelect defaultValue="react" aria-label="Select your favorite framework/library">
      <option value="angular">Angular</option>
      <option value="react">React</option>
      <option value="svelte">Svelte</option>
      <option value="vue">Vue</option>
    </NativeSelect>
  );
}
```

## Controlled

```jsx
import { useState } from 'react';
import { NativeSelect } from '@simplyui/react';

function Demo() {
  const [value, setValue] = useState('react');

  return (
    <NativeSelect value={value} onChange={(e) => setValue(e.target.value)} aria-label="Select your favorite framework/library">
      <option value="angular">Angular</option>
      <option value="react">React</option>
      <option value="svelte">Svelte</option>
      <option value="vue">Vue</option>
    </NativeSelect>
  );
}
```

## Disabled state

Use the `disabled` property to disable interaction and focus. When `disabled` property is set to `true` NativeSelect has `data-disabled` attribute.

```jsx
import { NativeSelect } from '@simplyui/react';

function Demo() {
  return (
    <NativeSelect disabled defaultValue="react" aria-label="Select your favorite framework/library">
      <option value="angular">Angular</option>
      <option value="react">React</option>
      <option value="svelte">Svelte</option>
      <option value="vue">Vue</option>
    </NativeSelect>
  );
}
```

## Invalid state

Use the `invalid` property to highlight input error for the user. When `invalid` property is set to `true` NativeSelect has `data-invalid` attribute and `aria-invalid` attribute set to `true`.

```jsx
import { NativeSelect } from '@simplyui/react';

function Demo() {
  return (
    <NativeSelect invalid defaultValue="react" aria-label="Select your favorite framework/library">
      <option value="angular">Angular</option>
      <option value="react">React</option>
      <option value="svelte">Svelte</option>
      <option value="vue">Vue</option>
    </NativeSelect>
  );
}
```

## Required state

Use `required` property to highlight for user that input is required. When `required` property is set to `true` NativeSelect has `aria-required` attribute set to `true`.

```jsx
import { NativeSelect, Label } from '@simplyui/react';

function Demo() {
  return (
    <div>
      <Label withRequiredIndicator htmlFor="framework/library">
        Select your favorite framework/library
      </Label>
      <NativeSelect required id="framework/library" defaultValue="react">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
    </div>
  );
}
```

## Placeholder

Use `placeholder` property to add placeholder to the NativeSelect.

```jsx
import { NativeSelect } from '@simplyui/react';

function Demo() {
  return (
    <NativeSelect placeholder="Select your favorite framework/library">
      <option value="angular">Angular</option>
      <option value="react">React</option>
      <option value="svelte">Svelte</option>
      <option value="vue">Vue</option>
    </NativeSelect>
  );
}
```

## Sizes

Use the `size` property to change the size of the NativeSelect. You can set the value to `xs`, `sm`, `md`, `lg` or `xl`. The default value is `md`.

```jsx
import { NativeSelect } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <NativeSelect size="xs" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </NativeSelect>
      <NativeSelect size="sm" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </NativeSelect>
      <NativeSelect size="md" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </NativeSelect>
      <NativeSelect size="lg" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </NativeSelect>
      <NativeSelect size="xl" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </NativeSelect>
    </div>
  );
}
```

## Variants

Use the `variant` property to change the variant of the NativeSelect. You can set the value to `filled`, `outline` or `underlined`. The default value is `filled`.

```jsx
import { NativeSelect } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <NativeSelect variant="filled" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
      <NativeSelect variant="outline" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
      <NativeSelect variant="underlined" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
    </div>
  );
}
```

## Focus border colors

Use the `focusBorderColor` property to change the border color when the NativeSelect is focused. You can set the value to `neutral`, `primary`, `secondary`, `info`, `success`, `warning` or `error`. The default value is `primary`.

```jsx
import { NativeSelect } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <NativeSelect focusBorderColor="neutral" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
      <NativeSelect focusBorderColor="primary" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
      <NativeSelect focusBorderColor="secondary" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
      <NativeSelect focusBorderColor="info" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
      <NativeSelect focusBorderColor="success" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
      <NativeSelect focusBorderColor="warning" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
      <NativeSelect focusBorderColor="error" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
    </div>
  );
}
```

## Border radius

Each size of NativeSelect includes appropriate border radius value. Use `rounded` property to override border radius determined by `size` property. You can set the value to `none`, `xs`, `sm`, `md`, `lg`, `xl` or `full`.

```jsx
import { NativeSelect } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <NativeSelect rounded="none" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
      <NativeSelect rounded="xs" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
      <NativeSelect rounded="sm" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
      <NativeSelect rounded="md" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
      <NativeSelect rounded="lg" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
      <NativeSelect rounded="xl" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
      <NativeSelect rounded="full" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
    </div>
  );
}
```

## Icon size

Each size of NativeSelect includes appropriate icon size. Use `iconSize` property to override icon size determined by `size` property.

```jsx
import { NativeSelect } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <NativeSelect size="md" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
      <NativeSelect iconSize="1.5rem" size="md" defaultValue="react" aria-label="Select your favorite framework/library">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
    </div>
  );
}
```

## Right section

Use `rightSection` property to replace the default icon.

```jsx
import { NativeSelect } from '@simplyui/react';

export function Demo() {
  return (
    <NativeSelect rightSection={<ChevronDownIcon />} defaultValue="react" aria-label="Select your favorite framework/library">
      <option value="angular">Angular</option>
      <option value="react">React</option>
      <option value="svelte">Svelte</option>
      <option value="vue">Vue</option>
    </NativeSelect>
  );
}

function ChevronDownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  );
}
```

## Add elements inside NativeSelect

In some scenarios, you might need to add an icon or another component inside the TextInput component. The example below demonstrate how to do this.

```jsx
import { NativeSelect } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="relative">
        <div className="h-10 w-10 absolute top-0 left-0 flex justify-center items-center pointer-events-none z-10">
          <CodeBracketIcon />
        </div>
        <NativeSelect variant="filled" defaultValue="react" aria-label="Select your favorite framework/library" className="pl-10">
          <option value="angular">Angular</option>
          <option value="react">React</option>
          <option value="svelte">Svelte</option>
          <option value="vue">Vue</option>
        </NativeSelect>
      </div>
      <div className="relative">
        <div className="h-10 w-10 absolute top-0 left-0 flex justify-center items-center pointer-events-none z-10">
          <CodeBracketIcon />
        </div>
        <NativeSelect variant="outline" defaultValue="react" aria-label="Select your favorite framework/library" className="pl-10">
          <option value="angular">Angular</option>
          <option value="react">React</option>
          <option value="svelte">Svelte</option>
          <option value="vue">Vue</option>
        </NativeSelect>
      </div>
      <div className="relative">
        <div className="h-10 w-10 absolute top-0 left-0 flex justify-center items-center pointer-events-none z-10">
          <CodeBracketIcon />
        </div>
        <NativeSelect variant="underlined" defaultValue="react" aria-label="Select your favorite framework/library" className="pl-10">
          <option value="angular">Angular</option>
          <option value="react">React</option>
          <option value="svelte">Svelte</option>
          <option value="vue">Vue</option>
        </NativeSelect>
      </div>
    </div>
  );
}

function CodeBracketIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z" clipRule="evenodd" />
    </svg>
  );
}
```

## Left addon

Example how to add addon to the left of the NativeSelect component.

```jsx
import { NativeSelect } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex">
        <div className="flex justify-center items-center px-2.5 bg-neutral-7 text-md rounded-l-md">
          <CodeBracketIcon />
        </div>
        <NativeSelect variant="filled" defaultValue="react" aria-label="Select your favorite framework/library" className="rounded-l-none">
          <option value="angular">Angular</option>
          <option value="react">React</option>
          <option value="svelte">Svelte</option>
          <option value="vue">Vue</option>
        </NativeSelect>
      </div>
      <div className="flex">
        <div className="flex justify-center items-center px-2.5 bg-neutral-7 text-md rounded-l-md">
          <CodeBracketIcon />
        </div>
        <NativeSelect variant="outline" defaultValue="react" aria-label="Select your favorite framework/library" className="rounded-l-none">
          <option value="angular">Angular</option>
          <option value="react">React</option>
          <option value="svelte">Svelte</option>
          <option value="vue">Vue</option>
        </NativeSelect>
      </div>
      <div className="flex">
        <div className="flex justify-center items-center px-2.5 bg-neutral-7 text-md">
          <CodeBracketIcon />
        </div>
        <NativeSelect variant="underlined" defaultValue="react" aria-label="Select your favorite framework/library" className="rounded-l-none">
          <option value="angular">Angular</option>
          <option value="react">React</option>
          <option value="svelte">Svelte</option>
          <option value="vue">Vue</option>
        </NativeSelect>
      </div>
    </div>
  );
}

export function CodeBracketIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z" clipRule="evenodd" />
    </svg>
  );
}
```

## Get select ref

```tsx
import { useRef } from 'react';
import { NativeSelect } from '@simplyui/react';

function Demo() {
  const selectRef = useRef<HTMLSelectElement>(null);

  return (
    <NativeSelect ref={selectRef} defaultValue="react" aria-label="Select your favorite framework/library">
      <option value="angular">Angular</option>
      <option value="react">React</option>
      <option value="svelte">Svelte</option>
      <option value="vue">Vue</option>
    </NativeSelect>
  );
}
```

## Accessibility

Associate [Label](../label/README.md) component with NativeSelect or provide `aria-label` property in case you use component without label for screen reader support.

```jsx
import { NativeSelect, Label } from '@simplyui/react';

function Demo() {
  return (
    <>
      <Label htmlFor="favorite-framework/library">Select your favorite framework/library</Label>
      <NativeSelect id="favorite-framework/library" placeholder="Select option">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </NativeSelect>
    </>
  );
}
```

```jsx
import { NativeSelect } from '@simplyui/react';

function Demo() {
  return (
    <NativeSelect aria-label="Select your favorite framework/library" placeholder="Select option">
      <option value="angular">Angular</option>
      <option value="react">React</option>
      <option value="svelte">Svelte</option>
      <option value="vue">Vue</option>
    </NativeSelect>
  );
}
```
