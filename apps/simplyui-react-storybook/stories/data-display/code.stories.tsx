import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Code } from '@simplyui/react/src';

export default {
  title: 'Data display/Code',
  component: Code,
  args: {
    children: 'npm install @simplyui/react',
    size: 'md',
    color: 'neutral',
    backgroundColor: 'neutral',
    accent: undefined,
    rounded: 'xs',
  },
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    backgroundColor: { control: 'select' },
    accent: { control: 'select' },
    rounded: { control: 'select' },
    className: { control: false },
    style: { control: false },
  },
  decorators: [
    (Story) => (
      <div className="text-2xl">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Default = Template.bind({});

export const TopAccent = Template.bind({});
TopAccent.args = {
  accent: 'top',
};

export const RightAccent = Template.bind({});
RightAccent.args = {
  accent: 'right',
};

export const BottomAccent = Template.bind({});
BottomAccent.args = {
  accent: 'bottom',
};

export const LeftAccent = Template.bind({});
LeftAccent.args = {
  accent: 'left',
};
