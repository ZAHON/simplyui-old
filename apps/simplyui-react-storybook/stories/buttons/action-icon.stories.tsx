import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { WrenchkIcon } from '../../icons';

import { ActionIcon } from '@simplyui/react/src';

export default {
  title: 'Buttons/ActionIcon',
  component: ActionIcon,
  args: {
    disabled: false,
    loading: false,
    type: 'button',
    size: 'md',
    variant: 'subtle',
    color: 'neutral',
    rounded: undefined,
    children: <WrenchkIcon size="1rem" />,
    'aria-label': 'Settings',
  },
  argTypes: {
    type: { control: 'select' },
    size: { control: 'select' },
    variant: { control: 'select' },
    color: { control: 'select' },
    rounded: { control: 'select' },
    children: { control: false },
    'aria-label': { control: false },
    loader: { control: false },
    loaderProps: { control: false },
    className: { control: false },
    style: { control: false },
  },
} as ComponentMeta<typeof ActionIcon>;

const Template: ComponentStory<typeof ActionIcon> = (args) => <ActionIcon {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
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
