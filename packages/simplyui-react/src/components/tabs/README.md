# Tabs

Switch between different views

## Import

```jsx
import { Tabs, TabsList, TabsTrigger, TabsPanel } from '@simplyui/react';
```

- **Tabs:** Provides context and state for all components
- **TabsList:** Wrapper for the `TabsTrigger` components
- **TabsTrigger:** The button that activates its associated content.
- **TabsPanel:** Contains the content associated with each trigger.

## Usage

```jsx
import { Tabs, TabsList, TabsTrigger, TabsPanel } from '@simplyui/react';

function Demo() {
  return (
    <Tabs defaultValue="gallery">
      <TabsList>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsPanel value="gallery">
        <p>Gallery</p>
      </TabsPanel>
      <TabsPanel value="messages">
        <p>Messages</p>
      </TabsPanel>
      <TabsPanel value="settings">
        <p>Settings</p>
      </TabsPanel>
    </Tabs>
  );
}
```

## Uncontrolled

If you do not need to control the state of the Tabs use `defaultValue` property on Tabs component to define panel that should be active when initially rendered.

```jsx
import { Tabs, TabsList, TabsTrigger, TabsPanel } from '@simplyui/react';

function Demo() {
  return (
    <Tabs defaultValue="first">
      <TabsList>
        <TabsTrigger value="first">First trigger</TabsTrigger>
        <TabsTrigger value="second">Second trigger</TabsTrigger>
        <TabsTrigger value="third">Third trigger</TabsTrigger>
      </TabsList>
      <TabsPanel value="first">First content</TabsPanel>
      <TabsPanel value="second">Second content</TabsPanel>
      <TabsPanel value="third">Third content</TabsPanel>
    </Tabs>
  );
}
```

## Controlled

To control Tabs state use `value` and `onValueChange` properties on Tabs component.

```jsx
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsPanel } from '@simplyui/react';

function Demo() {
  const [activeTab, setActiveTab] = useState('first');

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="first">First trigger</TabsTrigger>
        <TabsTrigger value="second">Second trigger</TabsTrigger>
        <TabsTrigger value="third">Third trigger</TabsTrigger>
      </TabsList>
      <TabsPanel value="first">First content</TabsPanel>
      <TabsPanel value="second">Second content</TabsPanel>
      <TabsPanel value="third">Third content</TabsPanel>
    </Tabs>
  );
}
```

## Variants

Use the `variant` property on Tabs component to change the variant of the Tabs. You can set the value to `default` or `pills`. The The default value is `default`.

```jsx
import { Tabs, TabsList, TabsTrigger, TabsPanel } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Tabs variant="default" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs variant="pills" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>
    </div>
  );
}
```

## Colors

Use the `color` property Tabs component to change the color of the Tabs. You can set the value to `neutral`, `primary`, `secondary`, `info`, `success`, `warning` or `error`. The default value is `primary`.

```jsx
import { Tabs, TabsList, TabsTrigger, TabsPanel } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Tabs color="neutral" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs color="primary" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs color="secondary" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs color="info" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs color="success" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs color="warning" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs color="error" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>
    </div>
  );
}
```

## Focus outline color

Use the `focusOutlineColor` property on Tabs component to change the outline color when the triggers is focused. You can set the value to `neutral`, `primary`, `secondary`, `info`, `success`, `warning` or `error`. The default value is `primary`.

```jsx
import { Tabs, TabsList, TabsTrigger, TabsPanel } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Tabs focusOutlineColor="neutral" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs focusOutlineColor="primary" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs focusOutlineColor="secondary" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs focusOutlineColor="info" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs focusOutlineColor="success" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs focusOutlineColor="warning" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs focusOutlineColor="error" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>
    </div>
  );
}
```

## Sizes

Use the `size` property Tabs component to change the size of the Tabs. You can set the value to `xs`, `sm`, `md`, `lg` or `xl`. The default value is `md`.

```jsx
import { Tabs, TabsList, TabsTrigger, TabsPanel } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Tabs size="xs" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs size="sm" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs size="md" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs size="lg" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs size="xl" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>
    </div>
  );
}
```

## Border radius

Use the `rounded` property on Tabs component to change border radius of the triggers. You can set the value to `none`, `xs`, `sm`, `md`, `lg`, `xl` or `full`. The default value is `md`. This property only works when `variant` property is set to `pills`.

```jsx
import { Tabs, TabsList, TabsTrigger, TabsPanel } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Tabs rounded="none" variant="pills" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs rounded="xs" variant="pills" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs rounded="sm" variant="pills" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs rounded="md" variant="pills" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs rounded="lg" variant="pills" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs rounded="xl" variant="pills" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs rounded="full" variant="pills" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>
    </div>
  );
}
```

## Triggers position

Use `position` property on TabsList component to change the alignment of the triggers. You can set the value to `left`, `right`, `center`, or `apart`. The default value is `left`.

```jsx
import { Tabs, TabsList, TabsTrigger, TabsPanel } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Tabs defaultValue="first">
        <TabsList position="left">
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs defaultValue="first">
        <TabsList position="right">
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs defaultValue="first">
        <TabsList position="center">
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs defaultValue="first">
        <TabsList position="apart">
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>
    </div>
  );
}
```

To display trigger on the opposite side, add css class `ml-auto` using `className` property on TabsTrigger component.

```jsx
import { Tabs, TabsList, TabsTrigger, TabsPanel } from '@simplyui/react';

function Demo() {
  return (
    <Tabs defaultValue="first">
      <TabsList>
        <TabsTrigger value="first">First trigger</TabsTrigger>
        <TabsTrigger value="second">Second trigger</TabsTrigger>
        <TabsTrigger value="third" className="ml-auto">
          Third trigger
        </TabsTrigger>
      </TabsList>
      <TabsPanel value="first">First content</TabsPanel>
      <TabsPanel value="second">Second content</TabsPanel>
      <TabsPanel value="third">Third content</TabsPanel>
    </Tabs>
  );
}
```

Triggers can take whole space of TabsList if you set `grow` property on TabsList component.

```jsx
import { Tabs, TabsList, TabsTrigger, TabsPanel } from '@simplyui/react';

function Demo() {
  return (
    <Tabs defaultValue="first">
      <TabsList grow>
        <TabsTrigger value="first">First trigger</TabsTrigger>
        <TabsTrigger value="second">Second trigger</TabsTrigger>
        <TabsTrigger value="third">Third trigger</TabsTrigger>
      </TabsList>
      <TabsPanel value="first">First content</TabsPanel>
      <TabsPanel value="second">Second content</TabsPanel>
      <TabsPanel value="third">Third content</TabsPanel>
    </Tabs>
  );
}
```

## Disabled

Set `disabled` property on TabsTrigger component to disable trigger. Disabled trigger cannot be activated with mouse or keyboard, will be skipped when user navigates with arrow keys.

```jsx
import { Tabs, TabsList, TabsTrigger, TabsPanel } from '@simplyui/react';

function Demo() {
  return (
    <Tabs defaultValue="first">
      <TabsList>
        <TabsTrigger value="first">First trigger</TabsTrigger>
        <TabsTrigger disabled value="second">
          Second trigger
        </TabsTrigger>
        <TabsTrigger value="third">Third trigger</TabsTrigger>
      </TabsList>
      <TabsPanel value="first">First content</TabsPanel>
      <TabsPanel value="second">Second content</TabsPanel>
      <TabsPanel value="third">Third content</TabsPanel>
    </Tabs>
  );
}
```

## Add elements inside TabsTrigger

Use `leftSection` or `rightSection` properties on TabsTrigger component to add any React node relative to the trigger content.

```jsx
import { Tabs, TabsList, TabsTrigger, TabsPanel } from '@simplyui/react';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <TabsList>
        <TabsTrigger rightSection={<ChatIndicator />} value="chat">
          Chat
        </TabsTrigger>
        <TabsTrigger leftSection={<CogIcon />} value="settings">
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsPanel value="chat">Chat content</TabsPanel>
      <TabsPanel value="settings">Settings content</TabsPanel>
    </Tabs>
  );
}

function ChatIndicator() {
  return (
    <span aria-hidden="true" role="presentation" className="h-4 w-4 pointer-events-none flex justify-center items-center text-xs text-white rounded-full bg-primary-9">
      5
    </span>
  );
}

function CogIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" role="presentation" focusable="false" aria-hidden="true" className="w-4 h-4">
      <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  );
}
```

## Activation mode

By default, triggers are activated when user presses arrows and Home/End keys. To disable that set `activationMode` property to `manual` on Tabs component.

```jsx
import { Tabs, TabsList, TabsTrigger, TabsPanel } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Tabs activationMode="automatic" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>

      <Tabs activationMode="manual" defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First trigger</TabsTrigger>
          <TabsTrigger value="second">Second trigger</TabsTrigger>
          <TabsTrigger value="third">Third trigger</TabsTrigger>
        </TabsList>
        <TabsPanel value="first">First content</TabsPanel>
        <TabsPanel value="second">Second content</TabsPanel>
        <TabsPanel value="third">Third content</TabsPanel>
      </Tabs>
    </div>
  );
}
```

## Get elements ref

```tsx
import { useRef } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsPanel } from '@simplyui/react';

function Demo() {
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabsListRef = useRef<HTMLDivElement>(null);
  const tabsTriggerRef = useRef<HTMLButtonElement>(null);
  const tabsPanelRef = useRef<HTMLDivElement>(null);

  return (
    <Tabs ref={tabsRef} defaultValue="first">
      <TabsList ref={tabsListRef}>
        <TabsTrigger ref={tabsTriggerRef} value="first">
          First trigger
        </TabsTrigger>
      </TabsList>
      <TabsPanel ref={tabsPanelRef} value="first">
        First content
      </TabsPanel>
    </Tabs>
  );
}
```

## Accessibility

Tabs component follows [WAI-ARIA recommendations](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-manual/) on accessibility.

### Keyboard Interactions

| Key          | Description                                                                                                             |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `Tab`        | When focus moves onto the tabs, focuses the active trigger. When a trigger is focused, moves focus to the active panel. |
| `ArrowDown`  | Moves focus to the next trigger depending on `orientation` and activates its associated panel.                          |
| `ArrowRight` | Moves focus to the next trigger depending on `orientation` and activates its associated panel.                          |
| `ArrowUp`    | Moves focus to the previous trigger depending on `orientation` and activates its associated panel.                      |
| `ArrowLeft`  | Moves focus to the previous trigger depending on `orientation` and activates its associated panel.                      |
| `Home`       | Moves focus to the first trigger and activates its associated panel.                                                    |
| `End`        | Moves focus to the last trigger and activates its associated panel.                                                     |
