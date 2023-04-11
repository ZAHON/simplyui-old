import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Kbd } from '@simplyui/react/src';

export default {
  title: 'Data display/Kbd',
  component: Kbd,
  args: {
    children: '⌘',
    size: 'md',
    rounded: 'xs',
  },
  argTypes: {
    size: { control: 'select' },
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
} as ComponentMeta<typeof Kbd>;

const Template: ComponentStory<typeof Kbd> = (args) => <Kbd {...args} />;

export const Default = Template.bind({});
