import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { CloseButton } from './close-button';

function getIconElement() {
  return screen.getByRole('button').querySelector('svg');
}

describe('CloseButton', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<CloseButton ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('should be button type', () => {
    render(<CloseButton disabled={false} />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('should support two icon type', () => {
    const { rerender } = render(<CloseButton iconType="x-mark" />);
    const xMarkIcon = getIconElement();

    rerender(<CloseButton iconType="x-circle" />);
    const xCircleIcon = getIconElement();

    expect(xMarkIcon).not.toEqual(xCircleIcon);
  });

  it('should be not in disabled state when disabled property not provided', () => {
    render(<CloseButton disabled={false} />);
    expect(screen.getByRole('button')).not.toBeDisabled;
  });

  it('should be in disabled state when disabled property be provided', () => {
    render(<CloseButton disabled={true} />);
    expect(screen.getByRole('button')).not.toBeDisabled;
  });

  it('should support custom icon size when iconSize property provided as number', () => {
    const iconSize = 10;

    render(<CloseButton iconSize={iconSize} />);
    expect(getIconElement()).toHaveStyle({ height: `${iconSize}px`, width: `${iconSize}px` });
  });

  it('should support custom icon size when iconSize property provided as string', () => {
    const iconSize = '10rem';

    render(<CloseButton iconSize={iconSize} />);
    expect(getIconElement()).toHaveStyle({ height: iconSize, width: iconSize });
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<CloseButton className={className} />);
    expect(screen.getByRole('button')).toHaveClass(className);
  });

  it('should have style handed over by style property', () => {
    const style = { color: 'red' };

    render(<CloseButton style={style} />);
    expect(screen.getByRole('button')).toHaveStyle(style);
  });
});
