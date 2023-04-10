import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CloseButton } from '@simplyui/react/src';

export default {
  title: 'Buttons/CloseButton',
  component: CloseButton,
  args: {
    disabled: false,
    iconType: 'x-mark',
    size: 'md',
    variant: 'subtle',
    color: 'neutral',
    rounded: undefined,
    'aria-label': 'Close',
  },
  argTypes: {
    iconType: { control: 'select' },
    size: { control: 'select' },
    variant: { control: 'select' },
    color: { control: 'select' },
    rounded: { control: 'select' },
    iconSize: { control: false },
    className: { control: false },
    style: { control: false },
    'aria-label': { control: false },
  },
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = (args) => <CloseButton {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const FilledVariant = Template.bind({});
FilledVariant.args = {
  variant: 'filled',
};

export const LightVariant = Template.bind({});
LightVariant.args = {
  variant: 'light',
};

export const OutlineVariant = Template.bind({});
OutlineVariant.args = {
  variant: 'outline',
};

export const SubtleVariant = Template.bind({});
SubtleVariant.args = {
  variant: 'subtle',
};

export const TransparentVariant = Template.bind({});
TransparentVariant.args = {
  variant: 'transparent',
};

export const CustomIconSize = Template.bind({});
CustomIconSize.args = {
  iconSize: '1rem',
};
