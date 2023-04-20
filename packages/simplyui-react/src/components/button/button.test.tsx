import { ButtonProps } from './button.types';
import { createRef } from 'react';
import { screen, render } from '@testing-library/react';
import { Button } from './button';

const buttonContent = 'Button';

const leftSectionContent = 'Left section';
const leftSectionElement = <p>{leftSectionContent}</p>;

const rightSectionContent = 'Right section';
const rightSectionElement = <p>{rightSectionContent}</p>;

function ButtonTest(props: Partial<ButtonProps>) {
  return <Button {...props}>{buttonContent}</Button>;
}

describe('Button', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref}>{buttonContent}</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('should be not disabled when disabled property not provided', () => {
    render(<ButtonTest disabled={false} />);
    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('should be disabled when disabled property provided', () => {
    render(<ButtonTest disabled={true} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should be not disabled when loading property not provided', () => {
    render(<ButtonTest loading={false} />);
    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('should be disabled when loading property provided', () => {
    render(<ButtonTest loading={true} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should have not data-disabled attribute when disabled property not provided', () => {
    render(<ButtonTest disabled={false} />);
    expect(screen.getByRole('button')).not.toHaveAttribute('data-disabled');
  });

  it('should have data-disabled attribute when disabled property provided', () => {
    render(<ButtonTest disabled={true} />);
    expect(screen.getByRole('button')).toHaveAttribute('data-disabled');
  });

  it('should have not data-loading attribute when loading property not provided', () => {
    render(<ButtonTest loading={false} />);
    expect(screen.getByRole('button')).not.toHaveAttribute('data-loading');
  });

  it('should have data-loading attribute when loading property provided', () => {
    render(<ButtonTest loading={true} />);
    expect(screen.getByRole('button')).toHaveAttribute('data-loading');
  });

  it('should have loading content when loading and loadingContent properties provided', () => {
    const loadingContent = 'Loading';

    const { rerender } = render(<ButtonTest />);
    expect(screen.getByRole('button')).toHaveTextContent(buttonContent);
    expect(screen.getByRole('button')).not.toHaveTextContent(loadingContent);

    rerender(<ButtonTest loading={true} loadingContent={loadingContent} />);
    expect(screen.getByRole('button')).not.toHaveTextContent(buttonContent);
    expect(screen.getByRole('button')).toHaveTextContent(loadingContent);
  });

  it('should not contain left section when leftSection property not provided', () => {
    render(<ButtonTest />);
    expect(screen.queryByText(leftSectionContent)).not.toBeInTheDocument();
  });

  it('should contain left section when leftSection property provided', () => {
    render(<ButtonTest leftSection={leftSectionElement} />);
    expect(screen.getByText(leftSectionContent)).toBeInTheDocument();
  });

  it('should not contain right section when rightSection property not provided', () => {
    render(<ButtonTest />);
    expect(screen.queryByText(rightSectionContent)).not.toBeInTheDocument();
  });

  it('should contain right section when rightSection property provided', () => {
    render(<ButtonTest rightSection={rightSectionElement} />);
    expect(screen.getByText(rightSectionContent)).toBeInTheDocument();
  });

  it('should not contain loader when loading property not provided', () => {
    render(<ButtonTest loading={false} />);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('should contain loader when loading property provided', () => {
    render(<ButtonTest loading={true} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should contain custom loader when loading and loader properties provided', () => {
    const customLoaderContent = 'Loader';

    function CustomLoader() {
      return <span>{customLoaderContent}</span>;
    }

    const { rerender } = render(<ButtonTest loading={true} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.queryByText(customLoaderContent)).not.toBeInTheDocument();

    rerender(<ButtonTest loading={true} loader={<CustomLoader />} />);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(screen.getByText(customLoaderContent)).toBeInTheDocument();
  });

  it('should contain loader which replace left section when loading property provided and loaderPosition property is set to "left"', () => {
    const { rerender } = render(
      <ButtonTest loaderPosition="left" loading={false} leftSection={leftSectionElement} />
    );
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(screen.getByText(leftSectionContent)).toBeInTheDocument();

    rerender(<ButtonTest loaderPosition="left" loading={true} leftSection={leftSectionElement} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.queryByRole(leftSectionContent)).not.toBeInTheDocument();
  });

  it('should contain loader which replace right section when loading property provided and loaderPosition property is set to "right"', () => {
    const { rerender } = render(
      <ButtonTest loaderPosition="right" loading={false} rightSection={rightSectionElement} />
    );
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(screen.getByText(rightSectionContent)).toBeInTheDocument();

    rerender(
      <ButtonTest loaderPosition="right" loading={true} rightSection={rightSectionElement} />
    );
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.queryByRole(rightSectionContent)).not.toBeInTheDocument();
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<ButtonTest className={className} />);
    expect(screen.getByRole('button')).toHaveClass(className);
  });
});
