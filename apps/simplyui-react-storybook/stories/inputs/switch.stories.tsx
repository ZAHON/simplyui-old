import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch } from '@simplyui/react/src';

export default {
  title: 'Inputs/Switch',
  component: Switch,
  args: {
    defaultChecked: false,
    disabled: false,
    invalid: false,
    required: false,
    variant: 'filled',
    size: 'md',
    color: 'primary',
    labelPosition: 'right',
    label: '',
    requiredIndicator: ' *',
    description: '',
    errorMessage: '',
    rounded: undefined,
  },
  argTypes: {
    variant: { control: 'select' },
    size: { control: 'select' },
    color: { control: 'select' },
    labelPosition: { control: 'select' },
    rounded: { control: 'select' },
    checked: { control: false },
    onChange: { control: false },
    name: { control: false },
    value: { control: false },
    rootClassName: { control: false },
    inputClassName: { control: false },
    labelWrapperClassName: { control: false },
    labelClassName: { control: false },
    requiredIndicatorClassName: { control: false },
    descriptionClassName: { control: false },
    errorMessageClassName: { control: false },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
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

export const Required = Template.bind({});
Required.args = {
  required: true,
};

export const RequiredWithLabel = Template.bind({});
RequiredWithLabel.args = {
  required: true,
  label: 'Switch label',
};

export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true,
};

export const InvalidWithErrorMessage = Template.bind({});
InvalidWithErrorMessage.args = {
  invalid: true,
  errorMessage: 'Switch error message',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Switch label',
};

export const WithLabelAndDescription = Template.bind({});
WithLabelAndDescription.args = {
  label: 'Switch label',
  description: 'switch description',
};
