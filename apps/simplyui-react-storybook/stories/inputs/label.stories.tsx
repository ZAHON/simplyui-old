import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from '@simplyui/react/src';

export default {
  title: 'Inputs/Label',
  component: Label,
  args: {
    htmlFor: 'input-id',
    children: 'Field Label',
    disabled: false,
    size: 'md',
    requiredIndicator: ' *',
    withRequiredIndicator: false,
  },
  argTypes: {
    size: { control: 'select' },
    className: { control: false },
    requiredIndicatorClassName: { control: false },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithRequiredIndicator = Template.bind({});
WithRequiredIndicator.args = {
  withRequiredIndicator: true,
};

export const CustomRequiredIndicator = Template.bind({});
CustomRequiredIndicator.args = {
  withRequiredIndicator: true,
  requiredIndicator: ' [required]',
};
