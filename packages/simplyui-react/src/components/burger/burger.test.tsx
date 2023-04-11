import { createRef } from 'react';
import type { BurgerProps } from './burger.types';
import { render, screen } from '@testing-library/react';
import { Burger } from './burger';

const defaultProps: BurgerProps = {
  opened: false,
};

describe('Burger', () => {
  describe('Root element', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLButtonElement>();

      render(<Burger {...defaultProps} ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should be button type', () => {
      render(<Burger {...defaultProps} />);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });

    it('should be not in disabled state when disabled property not provided', () => {
      render(<Burger {...defaultProps} disabled={false} />);
      expect(screen.getByRole('button')).not.toBeDisabled;
    });

    it('should be in disabled state when disabled property provided', () => {
      render(<Burger {...defaultProps} disabled={true} />);
      expect(screen.getByRole('button')).not.toBeDisabled;
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<Burger {...defaultProps} className={className} />);
      expect(screen.getByRole('button')).toHaveClass(className);
    });

    it('should have style handed over by style property', () => {
      const style = { color: 'red' };

      render(<Burger {...defaultProps} style={style} />);
      expect(screen.getByRole('button')).toHaveStyle(style);
    });
  });

  describe('Icon element', () => {
    function getIconElement() {
      // eslint-disable-next-line testing-library/no-node-access
      return screen.getByRole('button').querySelector('div');
    }

    it('should have not data-opened attribute when opened property not provided', () => {
      render(<Burger {...defaultProps} opened={false} />);
      expect(getIconElement()).not.toHaveAttribute('data-opened');
    });

    it('should have data-opened attribute when opened property provided', () => {
      render(<Burger {...defaultProps} opened={true} />);
      expect(getIconElement()).toHaveAttribute('data-opened');
    });

    it('should have appropriate css variable with value when transitionDuration property provided', () => {
      const transitionDuration = 500;

      render(<Burger {...defaultProps} transitionDuration={transitionDuration} />);
      expect(getIconElement()).toHaveStyle({
        '--burger-icon-transition-duration': `${transitionDuration}ms`,
      });
    });

    it('should have class name handed over by iconClassName property', () => {
      const iconClassName = 'test';

      render(<Burger {...defaultProps} iconClassName={iconClassName} />);
      expect(getIconElement()).toHaveClass(iconClassName);
    });

    it('should have style handed over by iconStyle property', () => {
      const iconStyle = { color: 'red' };

      render(<Burger {...defaultProps} iconStyle={iconStyle} />);
      expect(getIconElement()).toHaveStyle(iconStyle);
    });
  });
});
