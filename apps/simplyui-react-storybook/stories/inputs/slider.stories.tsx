import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider } from '@simplyui/react/src';

export default {
  title: 'Inputs/Slider',
  component: Slider,
  args: {
    size: 'md',
    color: 'primary',
    focusOutlineColor: 'primary',
    orientation: 'horizontal',
    defaultValue: 50,
    name: 'slider name',
    thumbLabel: 'slider thumb aria-label',
    disabled: false,
    inverted: false,
    showRange: true,
    min: 0,
    max: 100,
    step: 1,
  },
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    focusOutlineColor: { control: 'select' },
    orientation: { control: 'select' },
    value: { control: false },
    onChange: { control: false },
    onChangeEnd: { control: false },
    trackProps: { control: false },
    rangeProps: { control: false },
    thumbProps: { control: false },
  },
  decorators: [
    (Story) => (
      <div className="h-52">
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

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};

export const WithoutRange = Template.bind({});
WithoutRange.args = {
  showRange: false,
};

export const VerticalOrientation = Template.bind({});
VerticalOrientation.args = {
  orientation: 'vertical',
};
