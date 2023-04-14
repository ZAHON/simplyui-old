import type { LabelProps } from './label.types';
import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './label';

const labelContent = 'Label';

function LabelTest(props: Omit<LabelProps, 'children'>) {
  return <Label {...props}>{labelContent}</Label>;
}

describe('Label', () => {
  describe('Root element', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLLabelElement>();

      render(<Label ref={ref}>{labelContent}</Label>);
      expect(ref.current).toBeInstanceOf(HTMLLabelElement);
    });

    it('should have not data-disabled attribute when disabled property not provided', () => {
      render(<LabelTest disabled={false} />);
      expect(screen.getByText(labelContent)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided', () => {
      render(<LabelTest disabled={true} />);
      expect(screen.getByText(labelContent)).toHaveAttribute('data-disabled');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<LabelTest className={className} />);
      expect(screen.getByText(labelContent)).toHaveClass(className);
    });

    it('should have style handed over by style property', () => {
      const style = { color: 'red' };

      render(<LabelTest style={style} />);
      expect(screen.getByText(labelContent)).toHaveStyle(style);
    });

    it('should contain required indicator element when withRequiredIndicator property provided', () => {
      const requiredIndicator = '[required]';

      render(<LabelTest withRequiredIndicator requiredIndicator={requiredIndicator} />);

      const labelElement = screen.getByText(labelContent);
      const requiredIndicatorElement = screen.getByText(requiredIndicator);

      expect(labelElement).toContainElement(requiredIndicatorElement);
    });
  });

  describe('Required indicator element', () => {
    const requiredIndicator = '[required]';

    function LabelWithRequiredIndicatorTest(props: Omit<LabelProps, 'children'>) {
      return (
        <Label withRequiredIndicator requiredIndicator={requiredIndicator} {...props}>
          {labelContent}
        </Label>
      );
    }

    it('should have not data-disabled attribute when disabled property not provided', () => {
      render(<LabelWithRequiredIndicatorTest disabled={false} />);
      expect(screen.getByText(requiredIndicator)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided', () => {
      render(<LabelWithRequiredIndicatorTest disabled={true} />);
      expect(screen.getByText(requiredIndicator)).toHaveAttribute('data-disabled');
    });

    it('should have class name handed over by requiredIndicatorClassName property', () => {
      const requiredIndicatorClassName = 'test';

      render(
        <LabelWithRequiredIndicatorTest requiredIndicatorClassName={requiredIndicatorClassName} />
      );
      expect(screen.getByText(requiredIndicator)).toHaveClass(requiredIndicatorClassName);
    });

    it('should have style handed over by requiredIndicatorStyle property', () => {
      const requiredIndicatorStyle = { color: 'red' };

      render(<LabelWithRequiredIndicatorTest requiredIndicatorStyle={requiredIndicatorStyle} />);
      expect(screen.getByText(requiredIndicator)).toHaveStyle(requiredIndicatorStyle);
    });
  });
});
