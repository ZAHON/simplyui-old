import { ButtonProps } from './button.types';
import { createRef } from 'react';
import { screen, render } from '@testing-library/react';
import { Button } from './button';

const buttonContent = 'Button';
const leftIcon = 'left-icon';
const rightIcon = 'right-icon';

describe('Button', () => {
  describe('Root element', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLButtonElement>();

      render(<Button ref={ref}>{buttonContent}</Button>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should have not data-disabled attribute when disabled property not provided', () => {
      render(<Button disabled={false}>{buttonContent}</Button>);
      expect(screen.getByText(buttonContent)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided', () => {
      render(<Button disabled={true}>{buttonContent}</Button>);
      expect(screen.getByText(buttonContent)).toHaveAttribute('data-disabled');
    });

    it('should have not data-loading attribute when loading property not provided', () => {
      render(<Button loading={false}>{buttonContent}</Button>);
      expect(screen.getByText(buttonContent)).not.toHaveAttribute('data-loading');
    });

    it('should have data-loading attribute when loading property provided', () => {
      render(<Button loading={true}>{buttonContent}</Button>);
      expect(screen.getByText(buttonContent)).toHaveAttribute('data-loading');
    });

    it('should be disabled when disabled property provided', () => {
      render(<Button disabled={true}>{buttonContent}</Button>);
      expect(screen.getByText(buttonContent)).toBeDisabled;
    });

    it('should be disabled when loading property provided', () => {
      render(<Button loading={true}>{buttonContent}</Button>);
      expect(screen.getByText(buttonContent)).toBeDisabled;
    });

    it('should have loading content when loading and loadingContent properties provided', () => {
      const loadingContent = 'Loading';

      const { rerender } = render(<Button>{buttonContent}</Button>);
      expect(screen.getByText(buttonContent)).toBeInTheDocument();
      expect(screen.queryByText(loadingContent)).not.toBeInTheDocument();

      rerender(<Button loading={true}>{buttonContent}</Button>);
      expect(screen.getByText(buttonContent)).toBeInTheDocument();
      expect(screen.queryByText(loadingContent)).not.toBeInTheDocument();

      rerender(
        <Button loading={true} loadingContent={loadingContent}>
          {buttonContent}
        </Button>
      );
      expect(screen.queryByText(buttonContent)).not.toBeInTheDocument();
      expect(screen.getByText(loadingContent)).toBeInTheDocument();
    });

    it('should not include left icon when leftIcon property not provided', () => {
      render(<Button>{buttonContent}</Button>);
      expect(screen.queryByText(leftIcon)).not.toBeInTheDocument();
    });

    it('should include left icon when leftIcon property provided', () => {
      render(<Button leftIcon={leftIcon}>{buttonContent}</Button>);
      expect(screen.getByText(leftIcon)).toBeInTheDocument();
    });

    it('should not include right icon when rightIcon property not provided', () => {
      render(<Button>{buttonContent}</Button>);
      expect(screen.queryByText(rightIcon)).not.toBeInTheDocument();
    });

    it('should include right icon when rightIcon property provided', () => {
      render(<Button rightIcon={rightIcon}>{buttonContent}</Button>);
      expect(screen.getByText(rightIcon)).toBeInTheDocument();
    });

    it('should not include loader when loading property not provided', () => {
      render(<Button>{buttonContent}</Button>);
      expect(screen.queryByRole('status')).not.toBeInTheDocument();
    });

    it('should include loader when loading property provided', () => {
      render(<Button loading={true}>{buttonContent}</Button>);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should include custom loader when loading and loader properties provided', () => {
      function CustomLoader() {
        return <span>Loader</span>;
      }

      const { rerender } = render(<Button loading={true}>{buttonContent}</Button>);
      expect(screen.getByRole('status')).toBeInTheDocument();
      expect(screen.queryByText('Loader')).not.toBeInTheDocument();

      rerender(
        <Button loading={true} loader={<CustomLoader />}>
          {buttonContent}
        </Button>
      );
      expect(screen.queryByRole('status')).not.toBeInTheDocument();
      expect(screen.getByText('Loader')).toBeInTheDocument();
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<Button className={className}>{buttonContent}</Button>);
      expect(screen.getByText(buttonContent)).toHaveClass(className);
    });

    it('should have style handed over by style property', () => {
      const style = { backgroundColor: 'red' };

      render(<Button style={style}>{buttonContent}</Button>);
      expect(screen.getByText(buttonContent)).toHaveStyle(style);
    });
  });

  describe('Left icon wrapper element', () => {
    function getLeftIconWrapperElement() {
      // eslint-disable-next-line testing-library/no-node-access
      return screen.getByText(leftIcon).parentElement;
    }

    it('should have not data-disabled attribute when disabled property not provided', () => {
      render(
        <Button disabled={false} leftIcon={leftIcon}>
          {buttonContent}
        </Button>
      );
      expect(getLeftIconWrapperElement()).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided', () => {
      render(
        <Button disabled={true} leftIcon={leftIcon}>
          {buttonContent}
        </Button>
      );
      expect(getLeftIconWrapperElement()).toHaveAttribute('data-disabled');
    });

    it('should have not data-loading attribute when loading property not provided', () => {
      render(
        <Button loading={false} leftIcon={leftIcon}>
          {buttonContent}
        </Button>
      );
      expect(getLeftIconWrapperElement()).not.toHaveAttribute('data-loading');
    });

    it('should have data-loading attribute when loading property provided', () => {
      render(
        <Button loading={true} loaderPosition="right" leftIcon={leftIcon} rightIcon={rightIcon}>
          {buttonContent}
        </Button>
      );
      expect(getLeftIconWrapperElement()).toHaveAttribute('data-loading');
    });

    it('should include loader when loading property provided and loaderPosition property is set to "left"', () => {
      const { rerender } = render(<Button>{buttonContent}</Button>);
      expect(screen.queryByText(leftIcon)).not.toBeInTheDocument();
      expect(screen.queryByRole('status')).not.toBeInTheDocument();

      rerender(
        <Button loading={true} loaderPosition="left">
          {buttonContent}
        </Button>
      );
      expect(screen.queryByText(leftIcon)).not.toBeInTheDocument();
      expect(screen.getByRole('status')).toBeInTheDocument();

      rerender(<Button leftIcon={leftIcon}>{buttonContent}</Button>);
      expect(screen.getByText(leftIcon)).toBeInTheDocument();
      expect(screen.queryByRole('status')).not.toBeInTheDocument();

      rerender(
        <Button leftIcon={leftIcon} loading={true} loaderPosition="left">
          {buttonContent}
        </Button>
      );
      expect(screen.queryByText(leftIcon)).not.toBeInTheDocument();
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should have class name handed over by leftIconWrapperClassName property', () => {
      const leftIconWrapperClassName = 'test';

      render(
        <Button leftIcon={leftIcon} leftIconWrapperClassName={leftIconWrapperClassName}>
          {buttonContent}
        </Button>
      );
      expect(screen.getByText(leftIcon)).toHaveClass(leftIconWrapperClassName);
    });

    it('should have style handed over by leftIconWrapperStyle property', () => {
      const leftIconWrapperStyle = { backgroundColor: 'red' };

      render(
        <Button leftIcon={leftIcon} leftIconWrapperStyle={leftIconWrapperStyle}>
          {buttonContent}
        </Button>
      );
      expect(screen.getByText(leftIcon)).toHaveStyle(leftIconWrapperStyle);
    });
  });

  describe('Right icon wrapper element', () => {
    function getRightIconWrapperElement() {
      // eslint-disable-next-line testing-library/no-node-access
      return screen.getByText(rightIcon).parentElement;
    }

    it('should have not data-disabled attribute when disabled property not provided', () => {
      render(
        <Button disabled={false} rightIcon={rightIcon}>
          {buttonContent}
        </Button>
      );
      expect(getRightIconWrapperElement()).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided', () => {
      render(
        <Button disabled={true} rightIcon={rightIcon}>
          {buttonContent}
        </Button>
      );
      expect(getRightIconWrapperElement()).toHaveAttribute('data-disabled');
    });

    it('should have not data-loading attribute when loading property not provided', () => {
      render(
        <Button loading={false} rightIcon={rightIcon}>
          {buttonContent}
        </Button>
      );
      expect(getRightIconWrapperElement()).not.toHaveAttribute('data-loading');
    });

    it('should have data-loading attribute when loading property provided', () => {
      render(
        <Button loading={true} loaderPosition="left" leftIcon={leftIcon} rightIcon={rightIcon}>
          {buttonContent}
        </Button>
      );
      expect(getRightIconWrapperElement()).toHaveAttribute('data-loading');
    });

    it('should include loader when loading property provided and loaderPosition property is set to "right"', () => {
      const { rerender } = render(<Button>{buttonContent}</Button>);
      expect(screen.queryByText(rightIcon)).not.toBeInTheDocument();
      expect(screen.queryByRole('status')).not.toBeInTheDocument();

      rerender(
        <Button loading={true} loaderPosition="right">
          {buttonContent}
        </Button>
      );
      expect(screen.queryByText(rightIcon)).not.toBeInTheDocument();
      expect(screen.getByRole('status')).toBeInTheDocument();

      rerender(<Button rightIcon={rightIcon}>{buttonContent}</Button>);
      expect(screen.getByText(rightIcon)).toBeInTheDocument();
      expect(screen.queryByRole('status')).not.toBeInTheDocument();

      rerender(
        <Button rightIcon={rightIcon} loading={true} loaderPosition="right">
          {buttonContent}
        </Button>
      );
      expect(screen.queryByText(rightIcon)).not.toBeInTheDocument();
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should have class name handed over by rightIconWrapperClassName property', () => {
      const rightIconWrapperClassName = 'test';

      render(
        <Button rightIcon={rightIcon} rightIconWrapperClassName={rightIconWrapperClassName}>
          {buttonContent}
        </Button>
      );
      expect(screen.getByText(rightIcon)).toHaveClass(rightIconWrapperClassName);
    });

    it('should have style handed over by rightIconWrapperStyle property', () => {
      const rightIconWrapperStyle = { backgroundColor: 'red' };

      render(
        <Button rightIcon={rightIcon} rightIconWrapperStyle={rightIconWrapperStyle}>
          {buttonContent}
        </Button>
      );
      expect(screen.getByText(rightIcon)).toHaveStyle(rightIconWrapperStyle);
    });
  });

  describe('Loader element', () => {
    function ButtonWithLoader(props: Omit<ButtonProps, 'children'>) {
      return (
        <Button loading={true} {...props}>
          {buttonContent}
        </Button>
      );
    }

    it('should have not data-disabled attribute when disabled property not provided', () => {
      render(<ButtonWithLoader disabled={false} />);
      expect(screen.getByRole('status')).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided', () => {
      render(<ButtonWithLoader disabled={true} />);
      expect(screen.getByRole('status')).toHaveAttribute('data-disabled');
    });
  });
});
