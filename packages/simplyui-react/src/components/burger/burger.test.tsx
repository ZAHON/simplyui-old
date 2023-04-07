import type { BurgerProps } from './burger.types';
import { render, screen } from '@testing-library/react';
import { Burger } from './burger';

const dataTestId = 'burger-root';

interface BurgerComponentProps extends Omit<BurgerProps, 'opened'> {
  opened?: boolean;
}

function BurgerComponent(props: BurgerComponentProps) {
  const { opened, ...others } = props;

  return (
    <Burger
      {...others}
      opened={opened ? opened : false}
      aria-label="Burger"
      data-testid={dataTestId}
    />
  );
}

function getRootElement() {
  return screen.getByTestId(dataTestId);
}

function getIconElement() {
  return getRootElement().children[0];
}

describe('Burger', () => {
  describe('Root element', () => {
    it('should be disabled when property disabled provided', () => {
      render(<BurgerComponent disabled={true} />);
      expect(getRootElement()).toBeDisabled();
    });

    it('should have appropriate css variable with value when property transitionDuration provided', () => {
      const transitionDuration = 500;

      render(<BurgerComponent transitionDuration={transitionDuration} />);
      expect(getRootElement()).toHaveStyle({
        '--burger-transition-duration': `${transitionDuration}ms`,
      });
    });

    it('should have class name handed over when property rootClassName provided', () => {
      const rootClassName = 'test';

      render(<BurgerComponent rootClassName={rootClassName} />);
      expect(getRootElement()).toHaveClass(rootClassName);
    });

    it('should have style handed over when property rootStyle provided', () => {
      const rootStyle = { backgroundColor: 'red' };

      render(<BurgerComponent rootStyle={rootStyle} />);
      expect(getRootElement()).toHaveStyle(rootStyle);
    });
  });

  describe('Icon element', () => {
    it('should have not attribute data-opened when property opened not provided', () => {
      render(<BurgerComponent opened={false} />);
      expect(getIconElement()).not.toHaveAttribute('data-opened');
    });

    it('should have attribute data-opened when property opened provided', () => {
      render(<BurgerComponent opened={true} />);
      expect(getIconElement()).toHaveAttribute('data-opened');
    });

    it('should have class name handed over when property iconClassName provided', () => {
      const iconClassName = 'test';

      render(<BurgerComponent iconClassName={iconClassName} />);
      expect(getIconElement()).toHaveClass(iconClassName);
    });

    it('should have style handed over when property iconStyle provided', () => {
      const iconStyle = { backgroundColor: 'red' };

      render(<BurgerComponent iconStyle={iconStyle} />);
      expect(getIconElement()).toHaveStyle(iconStyle);
    });
  });
});
