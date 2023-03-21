import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BellIcon } from '../../icons';

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
    children: <BellIcon size={16} />,
  },
  argTypes: {
    size: { control: 'select' },
    variant: { control: 'select' },
    color: { control: 'select' },
    rounded: {
      control: 'select',
      options: [undefined, 'none', 'full'],
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
