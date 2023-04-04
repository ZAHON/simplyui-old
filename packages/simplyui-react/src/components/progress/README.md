# Progress

Give user feedback for status of the task

## Import

```jsx
import { Progress } from '@simplyui/react';
```

## Usage

```jsx
import { Progress } from '@simplyui/react';

function Demo() {
  return <Progress value={50} aria-label="Default progress" />;
}
```

## Indeterminate

Use `indeterminate` property to have Progress indicator with indeterminate value.

```jsx
import { Progress } from '@simplyui/react';

function Demo() {
  return <Progress indeterminate aria-label="Progress indicator indeterminate" />;
}
```

### Animation duration

The animation duration of this component in indeterminate state is dependent on the `prefers-reduced-motion` media query.

- On browsers that support `prefers-reduced-motion`, and where the user has not explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: no-preference`), the value of the `indeterminateSafeAnimationDuration` property will be used as the duration of the animation. The `indeterminateSafeAnimationDuration` property default value is `1000`.
- On browsers that support `prefers-reduced-motion`, and where the user has explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: reduce`), the value of the `indeterminateReduceAnimationDuration` property will be used as the duration of the animation. The `indeterminateReduceAnimationDuration` property default value is `4000`.

```jsx
import { Progress } from '@simplyui/react';

function Demo() {
  return <Progress indeterminate indeterminateSafeAnimationDuration={1500} indeterminateReduceAnimationDuration={500} aria-label="Indeterminate progress indicator with custom animation duration" />;
}
```

## Sizes

Use the `size` property to change the size of the Progress. You can set the value to `xs`, `sm`, `md`, `lg` or `xl`. The default value is `md`.

```jsx
import { Progress } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Progress size="xs" value={30} aria-label="Progress size xs" />
      <Progress size="sm" value={40} aria-label="Progress size sm" />
      <Progress size="md" value={50} aria-label="Progress size md" />
      <Progress size="lg" value={60} aria-label="Progress size lg" />
      <Progress size="xl" value={70} aria-label="Progress size xl" />
    </div>
  );
}
```

## Colors

Use the `color` property to change the color of the Progress indicator. You can set the value to `primary`, `secondary`, `info`, `success`, `warning` or `error`. The default value is `primary`.

```jsx
import { Progress } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Progress color="primary" value={30} aria-label="Progress color primary" />
      <Progress color="secondary" value={40} aria-label="Progress color secondary" />
      <Progress color="info" value={50} aria-label="Progress color info" />
      <Progress color="success" value={60} aria-label="Progress color success" />
      <Progress color="warning" value={70} aria-label="Progress color warning" />
      <Progress color="error" value={80} aria-label="Progress color error" />
    </div>
  );
}
```

## Background colors

Use the `backgroundColor` property to change the color of the Progress track. You can set the value to `neutral` ,`primary`, `secondary`, `info`, `success`, `warning` or `error`. The default value is `neutral`.

```jsx
import { Progress } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Progress backgroundColor="primary" color="primary" value={30} aria-label="Progress backgroundColor and color primary" />
      <Progress backgroundColor="secondary" color="secondary" value={40} aria-label="Progress backgroundColor and color secondary" />
      <Progress backgroundColor="info" color="info" value={50} aria-label="Progress backgroundColor and color info" />
      <Progress backgroundColor="success" color="success" value={60} aria-label="Progress backgroundColor and color success" />
      <Progress backgroundColor="warning" color="warning" value={70} aria-label="Progress backgroundColor and color warning" />
      <Progress backgroundColor="error" color="error" value={80} aria-label="Progress backgroundColor and color error" />
    </div>
  );
}
```

## Rounded

Use the `rounded` property to change border radius of the Progress. You can set the value to `none`, `squared` or `full`. The default value is `full`.

```jsx
import { Progress } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Progress rounded="none" value={50} aria-label="Progress rounded none" />
      <Progress rounded="squared" value={50} aria-label="Progress rounded squared" />
      <Progress rounded="full" value={50} aria-label="Progress rounded full" />
    </div>
  );
}
```

## Rounded indicator edge

If you want to Progress indicator edge will have the same value of border radius as the `rounded` property pass `roundedIndicatorEdge` property. The default value is `true`.

```jsx
import { Progress } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Progress roundedIndicatorEdge={false} value={50} aria-label="Progress roundedIndicatorEdge false" />
      <Progress roundedIndicatorEdge={true} value={50} aria-label="Progress roundedIndicatorEdge true" />
    </div>
  );
}
```

## Striped

You can add `striped` property to apply a stripes via CSS gradient over the Progress indicator background color.

```jsx
import { Progress } from '@simplyui/react';

function Demo() {
  return <Progress striped value={50} value-label="Progress with stripes" />;
}
```

## Animated stripes

The striped gradient can also be animated. Add `animatedStripes` property to animate the stripes via CSS3 animations.

```jsx
import { Progress } from '@simplyui/react';

function Demo() {
  return <Progress striped animatedStripes value={50} value-label="Progress with animated stripes" />;
}
```

## With label

You can add `label` property to define an accessible name for Progress.

```jsx
import { Progress } from '@simplyui/react';

function Demo() {
  return <Progress label="Loading..." value={50} />;
}
```

## With value label

You can add `showValueLabel` property to show label with value of the Progress. Default content of the value label will be the numeric value as a percentage of the max value.

```jsx
import { Progress } from '@simplyui/react';

function Demo() {
  return <Progress showValueLabel label="Feeding…" value={50} />;
}
```

### Custom value label

You can provide `valueLabel` property to generate content of the value label.

```jsx
import { Progress } from '@simplyui/react';

function Demo() {
  return <Progress showValueLabel valueLabel={(value, max) => `${value} of ${max} dogs`} label="Feeding…" value={50} />;
}
```

## Get progress ref

```jsx
import { useRef } from 'react';
import { Progress } from '@simplyui/react';

function Demo() {
  const progressRef = useRef < HTMLDivElement > null;

  return <Progress ref={progressRef} value={50} aria-label="Get progress ref" />;
}
```

## Accessibility

- Progress has `role` of `progressbar`.
- Progress has `aria-valuenow` attribute with current value.
- Progress has `aria-valuemin` attribute with value provided by min property.
- Progress has `aria-valuemax` attribute with value provided by max property.
- Progress has `aria-valuetext` attribute with as the numeric value as a percentage of the max value. Use `valueText` property to change value of this attribute.
- Provide `aria-label` or `aria-labelledby` in case you use Progress without label for screen reader support.

```jsx
import { Progress } from '@simplyui/react';

function Demo() {
  return <Progress value={50} aria-label="Loading..." />;
}
```

```jsx
import { Progress } from '@simplyui/react';

function Demo() {
  return (
    <>
      <span id="progress-label">Loading...</span>
      <Progress aria-labelledby="progress-label" value={50} aria-label="Progress label" />
    </>
  );
}
```
