import type { CloseButtonIconProps } from './close-button-icon.types';
import { render } from '@testing-library/react';
import { CloseButtonIcon } from './close-button-icon';

const defaultProps: CloseButtonIconProps = {
  size: 'md',
  iconType: 'x-mark',
};

function getIconElement(container: HTMLElement) {
  return container.querySelector('svg');
}

describe('CloseButtonIcon', () => {
  it('should support two icon type', () => {
    const { container, rerender } = render(<CloseButtonIcon {...defaultProps} iconType="x-mark" />);
    const xMarkIcon = getIconElement(container);

    rerender(<CloseButtonIcon {...defaultProps} iconType="x-circle" />);
    const xCircleIcon = getIconElement(container);

    expect(xMarkIcon).not.toEqual(xCircleIcon);
  });

  it('should support custom icon size when iconSize property provided as number', () => {
    const iconSize = 10;

    const { container } = render(<CloseButtonIcon {...defaultProps} iconSize={iconSize} />);
    expect(getIconElement(container)).toHaveStyle({
      height: `${iconSize}px`,
      width: `${iconSize}px`,
    });
  });

  it('should support custom icon size when iconSize property provided as string', () => {
    const iconSize = '10rem';

    const { container } = render(<CloseButtonIcon {...defaultProps} iconSize={iconSize} />);
    expect(getIconElement(container)).toHaveStyle({
      height: iconSize,
      width: iconSize,
    });
  });
});
