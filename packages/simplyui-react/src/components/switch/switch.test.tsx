import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { Switch } from './switch';

describe('Switch', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Switch ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('should have role="switch"', () => {
    render(<Switch />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('should be not disabled when disabled property not provided', () => {
    render(<Switch disabled={false} />);
    expect(screen.getByRole('switch')).toBeEnabled();
  });

  it('should be disabled when disabled property provided', () => {
    render(<Switch disabled={true} />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  it('should be not required when required property not provided', () => {
    render(<Switch required={false} />);
    expect(screen.getByRole('switch')).not.toBeRequired();
  });

  it('should be required when required property provided', () => {
    render(<Switch required={true} />);
    expect(screen.getByRole('switch')).toBeRequired();
  });

  it('should be not invalid when invalid property not provided', () => {
    render(<Switch invalid={false} />);
    expect(screen.getByRole('switch')).toBeValid();
  });

  it('should be invalid when invalid property provided', () => {
    render(<Switch invalid={true} />);
    expect(screen.getByRole('switch')).toBeInvalid();
  });

  it('should have not data-disabled attribute when disabled property not provided', () => {
    render(<Switch disabled={false} />);
    expect(screen.getByRole('switch')).not.toHaveAttribute('data-disabled');
  });

  it('should have data-disabled attribute when disabled property provided', () => {
    render(<Switch disabled={true} />);
    expect(screen.getByRole('switch')).toHaveAttribute('data-disabled');
  });

  it('should have not data-invalid attribute when invalid property not provided', () => {
    render(<Switch invalid={false} />);
    expect(screen.getByRole('switch')).not.toHaveAttribute('data-invalid');
  });

  it('should have data-invalid attribute when invalid property provided', () => {
    render(<Switch invalid={true} />);
    expect(screen.getByRole('switch')).toHaveAttribute('data-invalid');
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<Switch className={className} />);
    expect(screen.getByRole('switch')).toHaveClass(className);
  });
});
