import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '@simplyui/react/src';

function DocumentPlusIcon() {
  return (
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
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  );
}

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
  leftIcon: <DocumentPlusIcon />,
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  rightIcon: <DocumentPlusIcon />,
};

export const WithLeftAndRightIcon = Template.bind({});
WithLeftAndRightIcon.args = {
  leftIcon: <DocumentPlusIcon />,
  rightIcon: <DocumentPlusIcon />,
};
