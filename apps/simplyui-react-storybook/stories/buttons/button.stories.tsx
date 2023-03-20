import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BellIcon } from '../../icons';

import { Button } from '@simplyui/react/src';

export default {
  title: 'Buttons/Button',
  component: Button,
  args: {
    size: 'md',
    variant: 'filled',
    color: 'primary',
    fullWidth: false,
    rounded: undefined,
    uppercase: false,
    loading: false,
    loadingText: '',
    loaderPosition: 'left',
    type: 'button',
    disabled: false,
    children: 'Button',
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
    loaderPosition: { control: 'select' },
    className: { control: false },
    leftIcon: { control: false },
    rightIcon: { control: false },
    loaderProps: { control: false },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

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

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export const Uppercase = Template.bind({});
Uppercase.args = {
  uppercase: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const LoadingWithLoadingText = Template.bind({});
LoadingWithLoadingText.args = {
  loading: true,
  loadingText: 'Loading...',
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  leftIcon: <BellIcon />,
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  rightIcon: <BellIcon />,
};

export const WithLeftAndRightIcon = Template.bind({});
WithLeftAndRightIcon.args = {
  leftIcon: <BellIcon />,
  rightIcon: <BellIcon />,
};
