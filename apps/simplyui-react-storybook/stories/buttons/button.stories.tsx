import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BookmarkIcon } from '../../icons';

import { Button } from '@simplyui/react/src';

function CustomLoader() {
  return (
    <div
      role="status"
      className="h-4 w-4 bg-current animate-[pulse_750ms_ease-in-out_infinite] rounded-full"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default {
  title: 'Buttons/Button',
  component: Button,
  args: {
    children: 'Button',
    type: 'button',
    size: 'md',
    variant: 'filled',
    color: 'primary',
    focusOutlineColor: 'primary',
    rounded: undefined,
    disabled: false,
    fullWidth: false,
    uppercase: false,
    loading: false,
    loadingContent: '',
    loaderPosition: 'left',
  },
  argTypes: {
    type: { control: 'select' },
    size: { control: 'select' },
    variant: { control: 'select' },
    color: { control: 'select' },
    focusOutlineColor: { control: 'select' },
    rounded: { control: 'select' },
    loaderPosition: { control: 'select' },
    loader: { control: false },
    loaderProps: { control: false },
    leftSection: { control: false },
    rightSection: { control: false },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const LoadingWithLoadingContent = Template.bind({});
LoadingWithLoadingContent.args = {
  loading: true,
  loadingContent: 'Loading...',
};

export const LoadingWithCustomLoader = Template.bind({});
LoadingWithCustomLoader.args = {
  loading: true,
  loader: <CustomLoader />,
};

export const FilledVariant = Template.bind({});
FilledVariant.args = {
  variant: 'filled',
};

export const LightVariant = Template.bind({});
LightVariant.args = {
  variant: 'light',
};

export const OutlineVariant = Template.bind({});
OutlineVariant.args = {
  variant: 'outline',
};

export const SubtleVariant = Template.bind({});
SubtleVariant.args = {
  variant: 'subtle',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export const Uppercase = Template.bind({});
Uppercase.args = {
  uppercase: true,
};

export const WithLeftSection = Template.bind({});
WithLeftSection.args = {
  leftSection: <BookmarkIcon size="1rem" />,
};

export const WithRightSection = Template.bind({});
WithRightSection.args = {
  rightSection: <BookmarkIcon size="1rem" />,
};
