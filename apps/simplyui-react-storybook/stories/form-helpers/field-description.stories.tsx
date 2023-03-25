import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { FieldDescription } from '@simplyui/react/src/components/form-helpers';

export default {
  title: 'Form helpers/FieldDescription',
  component: FieldDescription,
  args: {
    children: 'Field description',
    disabled: false,
  },
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof FieldDescription>;

const Template: ComponentStory<typeof FieldDescription> = (args) => <FieldDescription {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
