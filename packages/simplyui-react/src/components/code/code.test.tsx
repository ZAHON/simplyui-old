import type { CodeProps } from './code.types';
import { render, screen } from '@testing-library/react';
import { Code } from './code';

const codeContent = 'npm install @simplyui/react';

function CodeComponent(props: Omit<CodeProps, 'children'>) {
  return <Code {...props}>{codeContent}</Code>;
}

function getCodeElement() {
  return screen.getByText(codeContent);
}

describe('Code', () => {
  it('should have class name handed over when property className provided', () => {
    const className = 'test';

    render(<CodeComponent className={className} />);
    expect(getCodeElement()).toHaveClass(className);
  });

  it('should have style handed over when property style provided', () => {
    const style = { backgroundColor: 'red' };

    render(<CodeComponent style={style} />);
    expect(getCodeElement()).toHaveStyle(style);
  });
});
