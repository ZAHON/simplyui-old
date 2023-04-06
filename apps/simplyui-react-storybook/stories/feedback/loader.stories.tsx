import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from '@simplyui/react/src';

export default {
  title: 'Feedback/Loader',
  component: Loader,
  args: {
    variant: 'oval',
    size: 'md',
    color: 'primary',
    speedSafe: 750,
    speedReduce: 1500,
    label: 'Loading...',
  },
  argTypes: {
    variant: { control: 'select' },
    size: { control: 'select' },
    color: { control: 'select' },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});

export const Border = Template.bind({});
Border.args = {
  variant: 'border',
};

export const Spinner = Template.bind({});
Spinner.args = {
  variant: 'spinner',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  className: '[--loader-size:100px] [--loader-border:10px]',
};
