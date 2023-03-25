import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { FieldErrorMessage } from '@simplyui/react/src/components/form-helpers';

export default {
  title: 'Form helpers/FieldErrorMessage',
  component: FieldErrorMessage,
  args: {
    children: 'Field error message',
    disabled: false,
  },
  argTypes: {
    className: { control: false },
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
