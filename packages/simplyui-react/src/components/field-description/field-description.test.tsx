import { createRef } from 'react';
import type { FieldDescriptionProps } from './field-description.types';
import { render, screen } from '@testing-library/react';
import { FieldDescription } from './field-description';

const fieldDescriptionContent = 'Field description';

function FieldDescriptionTest(props: Omit<FieldDescriptionProps, 'children'>) {
  return <FieldDescription {...props}>{fieldDescriptionContent}</FieldDescription>;
}

describe('FieldDescription', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLSpanElement>();

    render(<FieldDescription ref={ref}>{fieldDescriptionContent}</FieldDescription>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('should have not data-disabled attribute when disabled property not provided', () => {
    render(<FieldDescriptionTest disabled={false} />);
    expect(screen.getByText(fieldDescriptionContent)).not.toHaveAttribute('data-disabled');
  });

  it('should have data-disabled attribute when disabled property provided', () => {
    render(<FieldDescriptionTest disabled={true} />);
    expect(screen.getByText(fieldDescriptionContent)).toHaveAttribute('data-disabled');
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<FieldDescriptionTest className={className} />);
    expect(screen.getByText(fieldDescriptionContent)).toHaveClass(className);
  });

  it('should have style handed over by style property', () => {
    const style = { color: 'red' };

    render(<FieldDescriptionTest style={style} />);
    expect(screen.getByText(fieldDescriptionContent)).toHaveStyle(style);
  });
});
