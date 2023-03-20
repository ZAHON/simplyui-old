import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BellIcon } from '../../icons';

import { CloseButton } from '@simplyui/react/src';

export default {
  title: 'Buttons/CloseButton',
  component: CloseButton,
  args: {
    'aria-label': 'Close',
    size: 'md',
    variant: 'subtle',
    color: 'primary',
    rounded: undefined,
    disabled: false,
    type: 'button',
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
    children: { control: false },
  },
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = (args) => <CloseButton {...args} />;

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

export const CustomIconSize = Template.bind({});
CustomIconSize.args = {
  iconSize: '2.5rem',
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  children: <BellIcon />,
};
