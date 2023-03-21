import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BellIcon, BellSlashIcon } from '../../icons';

import { Switch } from '@simplyui/react/src';

export default {
  title: 'Inputs/Switch',
  component: Switch,
  args: {
    variant: 'filled',
    size: 'md',
    color: 'primary',
    value: 'on',
    disabled: false,
  },
  argTypes: {
    variant: { control: 'select' },
    size: { control: 'select' },
    color: { control: 'select' },
    rounded: {
      control: 'select',
      options: [undefined, 'none', 'full'],
    },
    icon: { control: false },
    iconOn: { control: false },
    iconOff: { control: false },
    onChange: { control: false },
    className: { control: false },
    thumbClassName: { control: false },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  defaultChecked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  defaultChecked: true,
};

export const UncheckedDisabled = Template.bind({});
UncheckedDisabled.args = {
  defaultChecked: false,
  disabled: true,
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  defaultChecked: true,
  disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <BellIcon size={16} />,
};

export const WithOnAndOffIcons = Template.bind({});
WithOnAndOffIcons.args = {
  iconOff: <BellSlashIcon size={16} />,
  iconOn: <BellIcon size={16} />,
};
