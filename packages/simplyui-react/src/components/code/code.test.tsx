import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { Code } from './code';

const codeContent = 'npm install @simplyui/react';

describe('Code', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLElement>();

    render(<Code ref={ref}>{codeContent}</Code>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<Code className={className}>{codeContent}</Code>);
    expect(screen.getByText(codeContent)).toHaveClass(className);
  });

  it('should have style handed over by style property', () => {
    const style = { color: 'red' };

    render(<Code style={style}>{codeContent}</Code>);
    expect(screen.getByText(codeContent)).toHaveStyle(style);
  });
});
