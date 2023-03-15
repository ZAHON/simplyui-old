import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { ActionIcon } from '@simplyui/react/src';

export default {
  title: 'Buttons/ActionIcon',
  component: ActionIcon,
  args: {
    'aria-label': 'Change settings',
    size: 'md',
    variant: 'subtle',
    color: 'primary',
    rounded: undefined,
    disabled: false,
    loading: false,
    type: 'button',
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
        />
      </svg>
    ),
  },
  argTypes: {
    size: { control: 'select' },
    variant: { control: 'select' },
    color: { control: 'select' },
    rounded: {
      control: 'select',
      options: [
        undefined,
        'none',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        'squared',
        'half',
        'full',
      ],
    },
    type: { control: 'select' },
    className: { control: false },
    loaderProps: { control: false },
    children: { control: false },
  },
} as ComponentMeta<typeof ActionIcon>;

const Template: ComponentStory<typeof ActionIcon> = (args) => <ActionIcon {...args} />;

export const Default = Template.bind({});

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
};

export const Subtle = Template.bind({});
Subtle.args = {
  variant: 'subtle',
};

export const Transparent = Template.bind({});
Transparent.args = {
  variant: 'transparent',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
