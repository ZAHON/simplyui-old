import type { AlertCloseButtonProps } from './alert-close-button.types';
import { render, screen } from '@testing-library/react';
import { AlertCloseButton } from './alert-close-button';

const alertCloseButtonProps: AlertCloseButtonProps = {
  alertColor: 'error',
  alertSize: 'md',
  alertVariant: 'light',
};

describe('AlertCloseButton', () => {
  it('should be button type', () => {
    render(<AlertCloseButton {...alertCloseButtonProps} />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<AlertCloseButton {...alertCloseButtonProps} className={className} />);
    expect(screen.getByRole('button')).toHaveClass(className);
  });

  it('should have style handed over by style property', () => {
    const style = { color: 'red' };

    render(<AlertCloseButton {...alertCloseButtonProps} style={style} />);
    expect(screen.getByRole('button')).toHaveStyle(style);
  });
});
