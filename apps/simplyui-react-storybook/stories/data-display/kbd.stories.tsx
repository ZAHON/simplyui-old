import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Kbd } from '@simplyui/react/src';

export default {
  title: 'Data display/Kbd',
  component: Kbd,
  args: {
    children: '⌘',
    size: 'sm',
    rounded: 'xs',
  },
  argTypes: {
    size: { control: 'select' },
    rounded: { control: 'select' },
    className: { control: false },
    style: { control: false },
  },
} as ComponentMeta<typeof Kbd>;

const Template: ComponentStory<typeof Kbd> = (args) => <Kbd {...args} />;

export const Default = Template.bind({});
