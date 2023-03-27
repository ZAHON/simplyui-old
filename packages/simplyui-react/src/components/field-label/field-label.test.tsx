import { render, screen } from '@testing-library/react';
import { FieldLabel, FieldLabelProps } from '.';

const labelContent = 'Field label';
const defaultRequiredIndicator = ' *';

const defaultProps: FieldLabelProps = {
  htmlFor: 'input-id',
  children: labelContent,
};

describe('FieldLabel', () => {
  describe('Label element', () => {
    it('should render correctly', () => {
      render(<FieldLabel {...defaultProps} />);
      expect(screen.getByText(labelContent)).toBeInTheDocument();
    });

    it('should have not attribute data-disabled when prop disabled was not pass', () => {
      render(<FieldLabel {...defaultProps} />);
      expect(screen.getByText(labelContent)).not.toHaveAttribute('data-disabled');
    });

    it('should have attribute data-disabled when prop disabled was pass', () => {
      render(<FieldLabel {...defaultProps} disabled />);
      expect(screen.getByText(labelContent)).toHaveAttribute('data-disabled');
    });

    it('should have class name passed by className prop', () => {
      const className = 'test';

      render(<FieldLabel {...defaultProps} className={className} />);
      expect(screen.getByText(labelContent)).toHaveClass(className);
    });

    it('should contain required indicator when prop withRequiredIndicator was pass', () => {
      render(<FieldLabel {...defaultProps} withRequiredIndicator />);

      const labelElement = screen.getByText(labelContent);
      const requiredIndicatorElement = screen.getByText(defaultRequiredIndicator, { trim: false });

      expect(labelElement).toContainElement(requiredIndicatorElement);
    });
  });
  describe('Required Indicator element', () => {
    it('should not render when prop withRequiredIndicator was not pass', () => {
      render(<FieldLabel {...defaultProps} />);

      expect(screen.queryByText(defaultRequiredIndicator, { trim: false })).not.toBeInTheDocument();
    });

    it('should render when prop withRequiredIndicator was pass', () => {
      render(<FieldLabel {...defaultProps} withRequiredIndicator />);

      expect(screen.getByText(defaultRequiredIndicator, { trim: false })).toBeInTheDocument();
    });

    it('should have not attribute data-disabled when prop disabled was not pass', () => {
      render(<FieldLabel {...defaultProps} withRequiredIndicator />);
      expect(screen.queryByText(defaultRequiredIndicator, { trim: false })).not.toHaveAttribute(
        'data-disabled'
      );
    });

    it('should have attribute data-disabled when prop disabled was pass', () => {
      render(<FieldLabel {...defaultProps} disabled withRequiredIndicator />);
      expect(screen.queryByText(defaultRequiredIndicator, { trim: false })).toHaveAttribute(
        'data-disabled'
      );
    });

    it('should have class name passed by requiredIndicatorClassName prop', () => {
      const className = 'test';

      render(
        <FieldLabel
          {...defaultProps}
          withRequiredIndicator
          requiredIndicatorClassName={className}
        />
      );
      expect(screen.queryByText(defaultRequiredIndicator, { trim: false })).toHaveClass(className);
    });
  });
});
