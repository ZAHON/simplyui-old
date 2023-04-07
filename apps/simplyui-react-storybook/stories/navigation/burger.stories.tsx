import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Burger } from '@simplyui/react/src';

export default {
  title: 'Navigation/Burger',
  component: Burger,
  args: {
    opened: false,
    'aria-label': 'Burger',
    disabled: false,
    roundedIconBars: true,
    size: 'md',
    color: 'text',
    rounded: undefined,
    transitionDuration: 300,
  },
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    rounded: { control: 'select' },
    rootClassName: { control: false },
    rootStyle: { control: false },
    iconClassName: { control: false },
    iconStyle: { control: false },
  },
} as ComponentMeta<typeof Burger>;

const Template: ComponentStory<typeof Burger> = (args) => <Burger {...args} />;

export const Default = Template.bind({});
