# ActionIcon

ActionIcon renders an icon within in a button.

## Import

```jsx
import { ActionIcon } from '@simplyui/react';
```

## Usage

```jsx
import { ActionIcon } from '@simplyui/react';

function Demo() {
  return (
    <ActionIcon aria-label="Settings">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" focusable="false" aria-hidden="true" className="h-5 w-5">
        <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    </ActionIcon>
  );
}
```

## Disabled state

Use the `disabled` property to disable interaction and focus.

```jsx
import { ActionIcon } from '@simplyui/react';

function Demo() {
  return (
    <ActionIcon disabled aria-label="Settings">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" focusable="false" aria-hidden="true" className="h-5 w-5">
        <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    </ActionIcon>
  );
}
```

## Loading state

Use the `loading` property to show the ActionIcon loading state. In this state [Loader](../loader/README.md) component replace icon and ActionIcon becomes disabled.

```jsx
import { ActionIcon } from '@simplyui/react';

function Demo() {
  return (
    <ActionIcon loading aria-label="Settings">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" focusable="false" aria-hidden="true" className="h-5 w-5">
        <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    </ActionIcon>
  );
}
```

### Control the [Loader](../loader/README.md) component

You can control the [Loader](../loader/README.md) component with `loaderProps` property.

```jsx
import { ActionIcon } from '@simplyui/react';

function Demo() {
  return (
    <ActionIcon loaderProps={{ variant: 'border', color: 'warning', speedSafe: 1000 }} loading aria-label="Settings">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" focusable="false" aria-hidden="true" className="h-5 w-5">
        <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    </ActionIcon>
  );
}
```

### Replace default [Loader](../loader/README.md) component

You can replace default loader component with `loader` property.

```jsx
import { ActionIcon } from '@simplyui/react';

function Demo() {
  return (
    <ActionIcon loader={<CustomLoader />} loading aria-label="Settings">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" focusable="false" aria-hidden="true" className="h-5 w-5">
        <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    </ActionIcon>
  );
}

function CustomLoader() {
  return (
    <div role="status" className="h-5 w-5 bg-current animate-[pulse_750ms_ease-in-out_infinite] rounded-full">
      <span className="sr-only">Loading...</span>
    </div>
  );
}
```

## Sizes

Use the `size` property to change the size of the ActionIcon. You can set the value to `xs`, `sm`, `md`, `lg` or `xl`. The default value is `md`.

```tsx
import { ActionIcon } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex items-center gap-x-4">
      <ActionIcon size="xs" aria-label="Settings">
        <CogIcon size="0.75rem" />
      </ActionIcon>
      <ActionIcon size="sm" aria-label="Settings">
        <CogIcon size="1rem" />
      </ActionIcon>
      <ActionIcon size="md" aria-label="Settings">
        <CogIcon size="1.25rem" />
      </ActionIcon>
      <ActionIcon size="lg" aria-label="Settings">
        <CogIcon size="1.5rem" />
      </ActionIcon>
      <ActionIcon size="xl" aria-label="Settings">
        <CogIcon size="1.75rem" />
      </ActionIcon>
    </div>
  );
}

function CogIcon(props: { size: string }) {
  const { size } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" focusable="false" aria-hidden="true" style={{ height: size, width: size }}>
      <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  );
}
```

## Colors

Use the `color` property to change the color of the ActionIcon. You can set the value to `neutral`, `primary`, `secondary`, `info`, `success`, `warning` or `error`. The default value is `neutral`.

```tsx
import { ActionIcon } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex items-center gap-x-4">
      <ActionIcon color="neutral" aria-label="Settings">
        <CogIcon size="1.25rem" />
      </ActionIcon>
      <ActionIcon color="primary" aria-label="Settings">
        <CogIcon size="1.25rem" />
      </ActionIcon>
      <ActionIcon color="secondary" aria-label="Settings">
        <CogIcon size="1.25rem" />
      </ActionIcon>
      <ActionIcon color="info" aria-label="Settings">
        <CogIcon size="1.25rem" />
      </ActionIcon>
      <ActionIcon color="success" aria-label="Settings">
        <CogIcon size="1.25rem" />
      </ActionIcon>
      <ActionIcon color="warning" aria-label="Settings">
        <CogIcon size="1.25rem" />
      </ActionIcon>
      <ActionIcon color="error" aria-label="Settings">
        <CogIcon size="1.25rem" />
      </ActionIcon>
    </div>
  );
}

function CogIcon(props: { size: string }) {
  const { size } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" focusable="false" aria-hidden="true" style={{ height: size, width: size }}>
      <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  );
}
```

## Variants

Use the `variant` property to change the variant of the ActionIcon. You can set the value to `filled`, `light`, `outline`, `subtle` or `transparent`. The The default value is `subtle`.

```tsx
import { ActionIcon } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex items-center gap-x-4">
      <ActionIcon variant="filled" color="primary" aria-label="Settings">
        <CogIcon size="1.25rem" />
      </ActionIcon>
      <ActionIcon variant="light" color="primary" aria-label="Settings">
        <CogIcon size="1.25rem" />
      </ActionIcon>
      <ActionIcon variant="outline" color="primary" aria-label="Settings">
        <CogIcon size="1.25rem" />
      </ActionIcon>
      <ActionIcon variant="subtle" color="primary" aria-label="Settings">
        <CogIcon size="1.25rem" />
      </ActionIcon>
      <ActionIcon variant="transparent" color="primary" aria-label="Settings">
        <CogIcon size="1.25rem" />
      </ActionIcon>
    </div>
  );
}

function CogIcon(props: { size: string }) {
  const { size } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" focusable="false" aria-hidden="true" style={{ height: size, width: size }}>
      <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  );
}
```

## Border radius

Each size of ActionIcon includes appropriate border radius value. Use the `rounded` property to change border radius. You can set the value to `none`, `squared` or `full`,

```tsx
import { ActionIcon } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex items-center gap-x-4">
      <ActionIcon rounded="none" variant="filled" color="primary" aria-label="Settings">
        <CogIcon size="1.25rem" />
      </ActionIcon>
      <ActionIcon rounded="squared" variant="filled" color="primary" aria-label="Settings">
        <CogIcon size="1.25rem" />
      </ActionIcon>
      <ActionIcon rounded="full" variant="filled" color="primary" aria-label="Settings">
        <CogIcon size="1.25rem" />
      </ActionIcon>
    </div>
  );
}

function CogIcon(props: { size: string }) {
  const { size } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" focusable="false" aria-hidden="true" style={{ height: size, width: size }}>
      <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  );
}
```

## Get button ref

```tsx
import { useRef } from 'react';
import { ActionIcon } from '@simplyui/react';

function Demo() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <ActionIcon ref={buttonRef} aria-label="Settings">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" focusable="false" aria-hidden="true" className="h-5 w-5">
        <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    </ActionIcon>
  );
}
```

## Accessibility

ActionIcon renders a regular button element. Include `title` or `aria-label` properties for screen reader support.

```jsx
import { ActionIcon } from '@simplyui/react';

function Demo() {
  return (
    <ActionIcon title="Settings">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" focusable="false" aria-hidden="true" className="h-5 w-5">
        <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    </ActionIcon>
  );
}
```

```jsx
import { ActionIcon } from '@simplyui/react';

function Demo() {
  return (
    <ActionIcon aria-label="Settings">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" focusable="false" aria-hidden="true" className="h-5 w-5">
        <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    </ActionIcon>
  );
}
```
