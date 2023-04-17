import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextInput, Label } from '@simplyui/react/src';

export default {
  title: 'Inputs/TextInput',
  component: TextInput,
  args: {
    disabled: false,
    invalid: false,
    required: false,
    size: 'md',
    variant: 'filled',
    color: 'neutral',
    placeholderColor: 'neutral',
    focusBorderColor: 'primary',
    rounded: undefined,
    defaultValue: 'Text input',
  },
  argTypes: {
    size: { control: 'select' },
    variant: { control: 'select' },
    color: { control: 'select' },
    placeholderColor: { control: 'select' },
    focusBorderColor: { control: 'select' },
    rounded: { control: 'select' },
    htmlSize: { control: false },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  defaultValue: '',
  placeholder: 'Type text...',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  id: 'text-input',
};
WithLabel.decorators = [
  (Story) => (
    <div className="flex flex-col">
      <Label htmlFor="text-input">Text input label</Label>
      <Story />
    </div>
  ),
];
