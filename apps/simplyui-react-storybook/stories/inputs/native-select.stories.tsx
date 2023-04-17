import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChevronDownIcon, CodeBracketIcon } from '../../icons';
import { NativeSelect, Label } from '@simplyui/react/src';

export default {
  title: 'Inputs/NativeSelect',
  component: NativeSelect,
  args: {
    children: (
      <>
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </>
    ),
    placeholder: '',
    disabled: false,
    invalid: false,
    required: false,
    size: 'md',
    variant: 'filled',
    focusBorderColor: 'primary',
    rounded: undefined,
    iconSize: '',
  },
  argTypes: {
    children: { control: false },
    size: { control: 'select' },
    variant: { control: 'select' },
    focusBorderColor: { control: 'select' },
    rounded: { control: 'select' },
    rightSection: { control: false },
    wrapperProps: { control: false },
    rightSectionWrapperProps: { control: false },
  },
} as ComponentMeta<typeof NativeSelect>;

const Template: ComponentStory<typeof NativeSelect> = (args) => <NativeSelect {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Select your favorite framework/library',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  id: 'native-select',
};
WithLabel.decorators = [
  (Story) => (
    <div className="flex flex-col">
      <Label htmlFor="native-select">Select your favorite framework/library</Label>
      <Story />
    </div>
  ),
];

export const WithCustomIconSize = Template.bind({});
WithCustomIconSize.args = {
  iconSize: '0.85rem',
};

export const WithCustomRightSection = Template.bind({});
WithCustomRightSection.args = {
  rightSection: <ChevronDownIcon size="1rem" />,
};

export const WithLeftIconSection = Template.bind({});
WithLeftIconSection.args = {
  className: 'pl-10',
};
WithLeftIconSection.decorators = [
  (Story) => (
    <div className="relative">
      <div className="h-10 w-10 absolute top-0 left-0 flex justify-center items-center pointer-events-none z-10">
        <CodeBracketIcon size="1rem" />
      </div>
      <Story />
    </div>
  ),
];

export const WithLeftIconAddon = Template.bind({});
WithLeftIconAddon.args = {
  className: 'rounded-l-none',
};
WithLeftIconAddon.decorators = [
  (Story) => (
    <div className="flex">
      <span className="flex justify-center items-center px-2.5 bg-neutral-7 text-md rounded-l-md">
        <CodeBracketIcon size="1rem" />
      </span>
      <Story />
    </div>
  ),
];
