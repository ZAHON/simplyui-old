import type { IconButtonProps } from './icon-button.types';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { IconButton } from './icon-button';

const iconButtonContent = 'Icon button';

function IconButtonTest(props: Partial<IconButtonProps>) {
  return <IconButton {...props}>{iconButtonContent}</IconButton>;
}

describe('IconButton', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<IconButton ref={ref}>{iconButtonContent}</IconButton>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('should be not disabled when disabled property not provided', () => {
    render(<IconButtonTest disabled={false} />);
    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('should be disabled when disabled property provided', () => {
    render(<IconButtonTest disabled={true} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should be not disabled when loading property not provided', () => {
    render(<IconButtonTest loading={false} />);
    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('should be disabled when loading property provided', () => {
    render(<IconButtonTest loading={true} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should have not data-disabled attribute when disabled property not provided', () => {
    render(<IconButtonTest disabled={false} />);
    expect(screen.getByRole('button')).not.toHaveAttribute('data-disabled');
  });

  it('should have data-disabled attribute when disabled property provided', () => {
    render(<IconButtonTest disabled={true} />);
    expect(screen.getByRole('button')).toHaveAttribute('data-disabled');
  });

  it('should have not data-loading attribute when loading property not provided', () => {
    render(<IconButtonTest loading={false} />);
    expect(screen.getByRole('button')).not.toHaveAttribute('data-loading');
  });

  it('should have data-loading attribute when loading property provided', () => {
    render(<IconButtonTest loading={true} />);
    expect(screen.getByRole('button')).toHaveAttribute('data-loading');
  });

  it('should not contain loader when loading property not provided', () => {
    render(<IconButtonTest loading={false} />);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('should contain loader when loading property provided', () => {
    render(<IconButtonTest loading={true} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should contain loader which replace content when loading property provided', () => {
    const iconButtonContent = 'Icon button';
    const iconButtonElement = <p>{iconButtonContent}</p>;

    const { rerender } = render(
      <IconButtonTest loading={false}>{iconButtonElement}</IconButtonTest>
    );
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(screen.getByText(iconButtonContent)).toBeInTheDocument();

    rerender(<IconButtonTest loading={true}>{iconButtonElement}</IconButtonTest>);
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.queryByText(iconButtonContent)).not.toBeInTheDocument();
  });

  it('should contain custom loader when loading and loader properties provided', () => {
    const customLoaderContent = 'Loader';

    function CustomLoader() {
      return <span>{customLoaderContent}</span>;
    }

    const { rerender } = render(<IconButtonTest loading={true} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.queryByText(customLoaderContent)).not.toBeInTheDocument();

    rerender(<IconButtonTest loading={true} loader={<CustomLoader />} />);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(screen.getByText(customLoaderContent)).toBeInTheDocument();
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<IconButtonTest className={className} />);
    expect(screen.getByRole('button')).toHaveClass(className);
  });
});
