import type { FieldErrorMessageProps } from './field-error-message.types';
import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { FieldErrorMessage } from './field-error-message';

const fieldErrorMessageContent = 'Field description';

function FieldErrorMessageTest(props: Omit<FieldErrorMessageProps, 'children'>) {
  return <FieldErrorMessage {...props}>{fieldErrorMessageContent}</FieldErrorMessage>;
}

describe('FieldErrorMessage', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLSpanElement>();

    render(<FieldErrorMessage ref={ref}>{fieldErrorMessageContent}</FieldErrorMessage>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('should have not data-disabled attribute when disabled property not provided', () => {
    render(<FieldErrorMessageTest disabled={false} />);
    expect(screen.getByText(fieldErrorMessageContent)).not.toHaveAttribute('data-disabled');
  });

  it('should have data-disabled attribute when disabled property provided', () => {
    render(<FieldErrorMessageTest disabled={true} />);
    expect(screen.getByText(fieldErrorMessageContent)).toHaveAttribute('data-disabled');
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<FieldErrorMessageTest className={className} />);
    expect(screen.getByText(fieldErrorMessageContent)).toHaveClass(className);
  });

  it('should have style handed over by style property', () => {
    const style = { color: 'red' };

    render(<FieldErrorMessageTest style={style} />);
    expect(screen.getByText(fieldErrorMessageContent)).toHaveStyle(style);
  });
});
