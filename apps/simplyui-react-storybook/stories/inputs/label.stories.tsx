import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from '@simplyui/react/src';

export default {
  title: 'Inputs/Label',
  component: Label,
  args: {
    children: 'Label',
    htmlFor: 'input-id',
    disabled: false,
    size: 'md',
    requiredIndicator: ' *',
    withRequiredIndicator: false,
  },
  argTypes: {
    size: { control: 'select' },
    className: { control: false },
    style: { control: false },
    requiredIndicatorClassName: { control: false },
    requiredIndicatorStyle: { control: false },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithControl = Template.bind({});
WithControl.args = {
  htmlFor: 'input-id',
};
WithControl.decorators = [
  (Story) => (
    <div className="flex flex-col gap-y-1">
      <Story />
      <input
        id="input-id"
        defaultValue="Test"
        type="text"
        className="h-10 px-2 text-base bg-transparent text-neutral-12 rounded-md border-2 border-neutral-7 focus:outline-none focus:border-primary-9"
      />
    </div>
  ),
];

export const WithRequiredIndicator = Template.bind({});
WithRequiredIndicator.args = {
  withRequiredIndicator: true,
};

export const WithCustomRequiredIndicator = Template.bind({});
WithCustomRequiredIndicator.args = {
  withRequiredIndicator: true,
  requiredIndicator: ' [required]',
};
