import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Burger } from '@simplyui/react/src';

export default {
  title: 'Navigation/Burger',
  component: Burger,
  args: {
    opened: false,
    disabled: false,
    roundedBars: true,
    bars: 3,
    size: 'md',
    iconSize: undefined,
    color: 'neutral',
    variant: 'subtle',
    rounded: undefined,
    transitionDuration: 300,
    'aria-label': 'Burger',
  },
  argTypes: {
    size: { control: 'select' },
    iconSize: { control: 'select' },
    color: { control: 'select' },
    variant: { control: 'select' },
    rounded: { control: 'select' },
    bars: { control: 'select' },
    'aria-label': { control: false },
    className: { control: false },
    style: { control: false },
    iconClassName: { control: false },
    iconStyle: { control: false },
  },
} as ComponentMeta<typeof Burger>;

const Template: ComponentStory<typeof Burger> = (args) => <Burger {...args} />;

export const Default = Template.bind({});

export const Opened = Template.bind({});
Opened.args = {
  opened: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const IconWith2Bars = Template.bind({});
IconWith2Bars.args = {
  bars: 2,
};

export const IconWith3Bars = Template.bind({});
IconWith3Bars.args = {
  bars: 3,
};

export const SubtleVariant = Template.bind({});
SubtleVariant.args = {
  variant: 'subtle',
};

export const TransparentVariant = Template.bind({});
TransparentVariant.args = {
  variant: 'transparent',
};
