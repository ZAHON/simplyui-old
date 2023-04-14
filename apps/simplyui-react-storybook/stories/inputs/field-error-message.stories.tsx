import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { FieldErrorMessage } from '@simplyui/react/src/components/field-error-message';

export default {
  title: 'Inputs/FieldErrorMessage',
  component: FieldErrorMessage,
  args: {
    children: 'Field error message',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    size: { control: 'select' },
    className: { control: false },
    style: { control: false },
  },
} as ComponentMeta<typeof FieldErrorMessage>;

const Template: ComponentStory<typeof FieldErrorMessage> = (args) => (
  <FieldErrorMessage {...args} />
);

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
