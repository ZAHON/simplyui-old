import type { Size } from '../../../types';

export function getIconSize(size: Size | string | number | undefined) {
  if (typeof size === 'undefined') {
    throw Error('Unsupported size');
  }

  if (typeof size === 'number') {
    return size;
  }

  switch (size) {
    case 'xs': {
      return '0.75rem';
    }
    case 'sm': {
      return '1rem';
    }
    case 'md': {
      return '1.25rem';
    }
    case 'lg': {
      return '1.75rem';
    }
    case 'xl': {
      return '2.125rem';
    }
    default: {
      return size;
    }
  }
}
