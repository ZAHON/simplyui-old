import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch, Label } from '@simplyui/react/src';

export default {
  title: 'Inputs/Switch',
  component: Switch,
  args: {
    defaultChecked: false,
    disabled: false,
    invalid: false,
    required: false,
    color: 'primary',
    focusOutlineColor: 'primary',
    size: 'md',
    rounded: 'full',
    name: 'switch-name',
    value: 'switch-value',
  },
  argTypes: {
    color: { control: 'select' },
    focusOutlineColor: { control: 'select' },
    size: { control: 'select' },
    rounded: { control: 'select' },
    checked: { control: false },
    onChange: { control: false },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});

export const Unchecked = Template.bind({});
Unchecked.args = {
  defaultChecked: false,
};

export const UncheckedDisabled = Template.bind({});
UncheckedDisabled.args = {
  defaultChecked: false,
  disabled: true,
};

export const Checked = Template.bind({});
Checked.args = {
  defaultChecked: true,
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  defaultChecked: true,
  disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  id: 'switch-id',
};
WithLabel.decorators = [
  (Story) => (
    <div className="flex items-center gap-x-3">
      <Story />
      <Label htmlFor="switch-id">Switch label</Label>
    </div>
  ),
];
