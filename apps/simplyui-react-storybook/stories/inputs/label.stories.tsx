import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from '@simplyui/react/src';

export default {
  title: 'Inputs/Label',
  component: Label,
  args: {
    htmlFor: 'input-id',
    children: 'Label',
    description: '',
    disabled: false,
    withAsterisk: false,
    size: 'md',
    color: 'default',
  },
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    rootClassName: { control: false },
    labelClassName: { control: false },
    asteriskClassName: { control: false },
    descriptionClassName: { control: false },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithAsterisk = Template.bind({});
WithAsterisk.args = {
  withAsterisk: true,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  description: 'Label description',
};
