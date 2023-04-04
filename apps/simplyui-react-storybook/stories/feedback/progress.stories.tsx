import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Progress } from '@simplyui/react/src';

export default {
  title: 'Feedback/Progress',
  component: Progress,
  args: {
    value: 50,
    min: 0,
    max: 100,
    indeterminate: false,
    striped: false,
    animated: true,
    animatedStripes: false,
    roundedIndicatorEdge: true,
    label: '',
    showValueLabel: false,
    size: 'md',
    color: 'primary',
    backgroundColor: 'neutral',
    rounded: 'full',
    stripesAnimationDuration: 1000,
    widthTransitionDuration: 600,
    indeterminateSafeAnimationDuration: 1000,
    indeterminateReduceAnimationDuration: 4000,
  },
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    backgroundColor: { control: 'select' },
    rounded: { control: 'select' },
    valueLabel: { control: false },
    valueText: { control: false },
    rootClassName: { control: false },
    rootStyle: { control: false },
    labelWrapperClassName: { control: false },
    labelWrapperStyle: { control: false },
    labelClassName: { control: false },
    labelStyle: { control: false },
    valueLabelClassName: { control: false },
    valueLabelStyle: { control: false },
    trackClassName: { control: false },
    trackStyle: { control: false },
    indicatorClassName: { control: false },
    indicatorStyle: { control: false },
  },
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress aria-label="Example" {...args} />
);

export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Loading...',
};

export const WithLabelAndValueLabel = Template.bind({});
WithLabelAndValueLabel.args = {
  label: 'Loading...',
  showValueLabel: true,
};

export const Striped = Template.bind({});
Striped.args = {
  striped: true,
};

export const StripedAndAnimated = Template.bind({});
StripedAndAnimated.args = {
  striped: true,
  animatedStripes: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
};

export function Demo() {
  return (
    <>
      <span id="progress-label">Loading...</span>
      <Progress aria-labelledby="progress-label" value={50} aria-label="Progress label" />
    </>
  );
}
