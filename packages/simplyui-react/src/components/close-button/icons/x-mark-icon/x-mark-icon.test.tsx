import type { IconProps } from '../icon.types';
import { render } from '@testing-library/react';
import { XMarkIcon } from './x-mark-icon';

const defaultProps: IconProps = {
  className: '',
};

function getIconElement(container: HTMLElement) {
  return container.querySelector('svg');
}

describe('XMarkIcon', () => {
  it('should support size property provided as number', () => {
    const size = 10;

    const { container } = render(<XMarkIcon {...defaultProps} size={size} />);
    expect(getIconElement(container)).toHaveStyle({
      height: `${size}px`,
      width: `${size}px`,
    });
  });

  it('should support size property provided as string', () => {
    const size = '10rem';

    const { container } = render(<XMarkIcon {...defaultProps} size={size} />);
    expect(getIconElement(container)).toHaveStyle({
      height: size,
      width: size,
    });
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    const { container } = render(<XMarkIcon {...defaultProps} className={className} />);
    expect(getIconElement(container)).toHaveClass(className);
  });
});
