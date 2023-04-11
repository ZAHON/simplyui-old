import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { Kbd } from './kbd';

const kbdContent = 'Enter';

describe('Kbd', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLElement>();

    render(<Kbd ref={ref}>{kbdContent}</Kbd>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<Kbd className={className}>{kbdContent}</Kbd>);
    expect(screen.getByText(kbdContent)).toHaveClass(className);
  });

  it('should have style handed over by style property', () => {
    const style = { color: 'red' };

    render(<Kbd style={style}>{kbdContent}</Kbd>);
    expect(screen.getByText(kbdContent)).toHaveStyle(style);
  });
});
