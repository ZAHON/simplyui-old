import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { FieldDescription } from '@simplyui/react/src/components/field-description';

export default {
  title: 'Inputs/FieldDescription',
  component: FieldDescription,
  args: {
    children: 'Field description',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    size: { control: 'select' },
    className: { control: false },
    style: { control: false },
  },
} as ComponentMeta<typeof FieldDescription>;

const Template: ComponentStory<typeof FieldDescription> = (args) => <FieldDescription {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
