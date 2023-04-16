import type { LabelRequiredIndicatorProps } from './label-required-indicator.types';
import { render, screen } from '@testing-library/react';
import { LabelRequiredIndicator } from './label-required-indicator';

const labelRequiredIndicatorContent = '[required]';

function LabelRequiredIndicatorTest(props: LabelRequiredIndicatorProps) {
  return (
    <LabelRequiredIndicator {...props}>{labelRequiredIndicatorContent}</LabelRequiredIndicator>
  );
}

describe('LabelRequiredIndicator', () => {
  it('should have aria-hidden attribute', () => {
    render(<LabelRequiredIndicatorTest />);
    expect(screen.getByText(labelRequiredIndicatorContent)).toHaveAttribute('aria-hidden');
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<LabelRequiredIndicatorTest className={className} />);
    expect(screen.getByText(labelRequiredIndicatorContent)).toHaveClass(className);
  });
});
