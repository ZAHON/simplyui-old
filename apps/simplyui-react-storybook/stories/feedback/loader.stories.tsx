import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from '@simplyui/react/src';

export default {
  title: 'Feedback/Loader',
  component: Loader,
  args: {
    variant: 'oval',
    size: 'md',
    color: 'blue',
    speed: 800,
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

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  label: 'Loading Test...',
};

export const CustomSpeed = Template.bind({});
CustomSpeed.args = {
  speed: 2000,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  className: '[--loader-size:100px] [--loader-border:10px]',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  className: 'text-[#ee02f2] dark:text-[#b1f702]',
};
