import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ExclamationTriangleIcon } from '../../icons';
import { Alert } from '@simplyui/react/src';

export default {
  title: 'Feedback/Alert',
  component: Alert,
  args: {
    title: 'Alert title',
    children:
      'Alert description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sapiente exercitationem magnam eum ea, eligendi voluptatem eos consectetur, deleniti reiciendis magni. Dignissimos veniam mollitia consectetur nostrum ex sapiente omnis velit.',
    size: 'md',
    variant: 'light',
    color: 'error',
    rounded: 'md',
    closeButton: false,
    closeButtonIconType: 'x-mark',
    closeButtonLabel: 'Close alert',
  },
  argTypes: {
    size: { control: 'select' },
    variant: { control: 'select' },
    color: { control: 'select' },
    rounded: { control: 'select' },
    accent: { control: 'select' },
    closeButtonIconType: { control: 'select' },
    onClose: { control: false },
    icon: { control: false },
    className: { control: false },
    style: { control: false },
    titleClassName: { control: false },
    titleStyle: { control: false },
    descriptionClassName: { control: false },
    descriptionStyle: { control: false },
    contentWrapperClassName: { control: false },
    contentWrapperStyle: { control: false },
    iconWrapperClassName: { control: false },
    iconWrapperStyle: { control: false },
    closeButtonClassName: { control: false },
    closeButtonStyle: { control: false },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <ExclamationTriangleIcon size="1.5rem" />,
};

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  closeButton: true,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  children: '',
};

export const OnlyTitleWithIcon = Template.bind({});
OnlyTitleWithIcon.args = {
  children: '',
  icon: <ExclamationTriangleIcon size="1.5rem" />,
};

export const OnlyDescription = Template.bind({});
OnlyDescription.args = {
  title: '',
};

export const OnlyDescriptionWithIcon = Template.bind({});
OnlyDescriptionWithIcon.args = {
  title: '',
  icon: <ExclamationTriangleIcon size="1.5rem" />,
};

export const OutlineVariant = Template.bind({});
OutlineVariant.args = {
  variant: 'outline',
};

export const FilledVariant = Template.bind({});
FilledVariant.args = {
  variant: 'filled',
};

export const LightVariant = Template.bind({});
LightVariant.args = {
  variant: 'light',
};

export const LightVariantAccentTop = Template.bind({});
LightVariantAccentTop.args = {
  variant: 'light',
  accent: 'top',
  rounded: 'none',
};

export const LightVariantAccentRight = Template.bind({});
LightVariantAccentRight.args = {
  variant: 'light',
  accent: 'right',
  rounded: 'none',
};

export const LightVariantAccentBottom = Template.bind({});
LightVariantAccentBottom.args = {
  variant: 'light',
  accent: 'bottom',
  rounded: 'none',
};

export const LightVariantAccentLeft = Template.bind({});
LightVariantAccentLeft.args = {
  variant: 'light',
  accent: 'left',
  rounded: 'none',
};
