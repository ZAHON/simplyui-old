import type { CloseButtonIconProps } from './close-button-icon.types';
import type { IconProps } from '../icons/icon.types';
import { twMerge } from 'tailwind-merge';
import { XMarkIcon, XCircleIcon } from '../icons';
import { closeButtonIconStyles } from './close-button-icon.styles';

export function CloseButtonIcon(props: CloseButtonIconProps) {
  const { iconType, size, iconSize } = props;

  const iconProps: IconProps = {
    size: iconSize,
    className: twMerge(closeButtonIconStyles({ size })),
  };

  switch (iconType) {
    case 'x-mark': {
      return <XMarkIcon {...iconProps} />;
    }
    case 'x-circle': {
      return <XCircleIcon {...iconProps} />;
    }
    default: {
      throw Error(`Unknown icon type: ${iconType}`);
    }
  }
}
