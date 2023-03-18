import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from '@simplyui/react/src';

export default {
  title: 'Inputs/Label',
  component: Label,
  args: {
    htmlFor: 'input-id',
    children: 'Label',
    withAsterisk: false,
    size: 'md',
  },
  argTypes: {
    size: { control: 'select' },
    className: { control: false },
    asteriskClassName: { control: false },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
