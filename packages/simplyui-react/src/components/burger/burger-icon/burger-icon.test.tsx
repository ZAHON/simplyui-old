import type { BurgerIconProps } from './burger-icon.types';
import { render } from '@testing-library/react';
import { BurgerIcon } from './burger-icon';

const defaultProps: BurgerIconProps = {
  opened: false,
};

function getIconElement(container: HTMLElement) {
  return container.querySelector('div');
}

describe('BurgerIcon', () => {
  it('should have not data-opened attribute when opened property not provided', () => {
    const { container } = render(<BurgerIcon {...defaultProps} opened={false} />);
    expect(getIconElement(container)).not.toHaveAttribute('data-opened');
  });

  it('should have data-opened attribute when opened property provided', () => {
    const { container } = render(<BurgerIcon {...defaultProps} opened={true} />);
    expect(getIconElement(container)).toHaveAttribute('data-opened');
  });

  it('should have appropriate css variable with value when transitionDuration property provided', () => {
    const transitionDuration = 500;

    const { container } = render(
      <BurgerIcon {...defaultProps} transitionDuration={transitionDuration} />
    );
    expect(getIconElement(container)).toHaveStyle({
      '--burger-icon-transition-duration': `${transitionDuration}ms`,
    });
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    const { container } = render(<BurgerIcon {...defaultProps} className={className} />);
    expect(getIconElement(container)).toHaveClass(className);
  });

  it('should have style handed over by style property', () => {
    const style = { color: 'red' };

    const { container } = render(<BurgerIcon {...defaultProps} style={style} />);
    expect(getIconElement(container)).toHaveStyle(style);
  });
});
