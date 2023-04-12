# Skeleton

Indicate content loading state

## Import

```jsx
import { Skeleton } from '@simplyui/react';
```

## Usage

```jsx
import { Skeleton } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-2">
      <Skeleton className="h-10 w-10 rounded-full" />
      <Skeleton className="h-2 rounded-full" />
      <Skeleton className="h-2 rounded-full" />
      <Skeleton className="h-2 rounded-full" />
    </div>
  );
}
```

## With content

If you want to indicate loading state of content that is already on page you can wrap it with Skeleton and control loading overlay visibility with `visible` property.

```jsx
import { useState } from 'react';
import { Skeleton, Button } from '@simplyui/react';

function Demo() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="flex flex-col gap-y-4">
      <Skeleton visible={visible} className="rounded-md">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat a quaerat error esse, explicabo saepe in quos consequatur quidem aut dolorum. Placeat rerum nobis ducimus eum? Recusandae dignissimos harum numquam.</p>
      </Skeleton>
      <Button onClick={() => setVisible((visible) => !visible)}>Toggle Skeleton</Button>
    </div>
  );
}
```

## Fit content

If you want to Skeleton have the width of his children add `fitContent` property.

```jsx
import { Skeleton } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Skeleton fitContent className="rounded-full">
        <div className="h-20 w-20 bg-primary-9 rounded-full" />
      </Skeleton>
    </div>
  );
}
```

## Animation duration

The animation duration of this component is dependent on the `prefers-reduced-motion` media query.

- On browsers that support `prefers-reduced-motion`, and where the user has not explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: no-preference`), the value of the `speedSafe` property will be used as the duration of the animation. The `speedSafe` property default value is `1500`.
- On browsers that support `prefers-reduced-motion`, and where the user has explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: reduce`), the value of the `speedReduce` property will be used as the duration of the animation. The `speedReduce` property default value is `3000`.

```jsx
import { Skeleton } from '@simplyui/react';

function Demo() {
  return <Skeleton speedSafe={800} speedReduce={2000} className="h-20 rounded-md" />;
}
```

## Get element ref

```tsx
import { useRef } from 'react';
import { Skeleton } from '@simplyui/react';

function Demo() {
  const skeletonRef = useRef<HTMLDivElement>(null);

  return <Skeleton ref={skeletonRef} />;
}
```
