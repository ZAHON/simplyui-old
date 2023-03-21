import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArrowsRightLeftIcon } from '../../icons';

import { Slider } from '@simplyui/react/src';

export default {
  title: 'Inputs/Slider',
  component: Slider,
  args: {
    size: 'md',
    color: 'primary',
    showLabel: 'on-hover',
    rounded: undefined,
    defaultValue: 50,
    name: 'slider-name',
    thumbArialabel: 'aria label',
    disabled: false,
    inverted: false,
    min: 0,
    max: 100,
    step: 1,
  },
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    showLabel: { control: 'select' },
    rounded: {
      control: 'select',
      options: [undefined, 'none'],
    },
    value: { control: false },
    onChange: { control: false },
    onChangeEnd: { control: false },
    label: { control: false },
    thumbIcon: { control: false },
    rootClassName: { control: false },
    trackClassName: { control: false },
    rangeClassName: { control: false },
    thumbClassName: { control: false },
    labelClassName: { control: false },
  },
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = {
  label: (value) => `${value} %`,
};

export const WithThumbIcon = Template.bind({});
WithThumbIcon.args = {
  thumbIcon: <ArrowsRightLeftIcon size={16} />,
};
