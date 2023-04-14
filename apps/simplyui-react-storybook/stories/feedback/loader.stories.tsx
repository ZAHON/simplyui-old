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
    loaderSize: '',
    loaderThickness: '',
  },
  argTypes: {
    variant: { control: 'select' },
    size: { control: 'select' },
    color: { control: 'select' },
    loaderSize: { control: 'text' },
    loaderThickness: { control: 'text' },
    className: { control: false },
    style: { control: false },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});

export const OvalVariant = Template.bind({});
OvalVariant.args = {
  variant: 'oval',
};

export const BorderVariant = Template.bind({});
BorderVariant.args = {
  variant: 'border',
};

export const SpinnerVariant = Template.bind({});
SpinnerVariant.args = {
  variant: 'spinner',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  loaderSize: '100px',
  loaderThickness: '10px',
};
