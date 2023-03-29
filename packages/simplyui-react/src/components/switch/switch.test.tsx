import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { useState } from 'react';
import { Switch } from '.';

// TODO - Label wrapper element tests
// TODO - Root element tests

const label = 'Switch label';
const requiredIndicator = ' *';
const description = 'switch description';
const errorMessage = 'switch error message';

describe('Switch', () => {
  describe('Root element', () => {
    it('should have class name handed over when rootClassName provided', () => {
      const rootClassName = 'test';

      render(<Switch rootClassName={rootClassName} />);
      expect(screen.getByRole('group')).toHaveClass(rootClassName);
    });
  });

  describe('Label wrapper element', () => {
    it('should have class name handed over when labelWrapperClassName provided', () => {
      const labelWrapperClassName = 'test';

      const { container } = render(
        <Switch label={label} labelWrapperClassName={labelWrapperClassName} />
      );
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      const labelWrapperElement = container.querySelector(`.${labelWrapperClassName}`);
      expect(labelWrapperElement).not.toBeNull();
    });
  });

  describe('Label element', () => {
    it('should not render when label not provided', () => {
      render(<Switch />);
      expect(screen.queryByText(label)).not.toBeInTheDocument();
    });

    it('should render when label provided', () => {
      render(<Switch label={label} />);
      expect(screen.getByText(label)).toBeInTheDocument();
    });

    it('should have class name handed over when labelClassName provided', () => {
      const labelClassName = 'test';

      render(<Switch label={label} labelClassName={labelClassName} />);
      expect(screen.getByText(label)).toHaveClass(labelClassName);
    });

    describe('Disabled state', () => {
      it('should have not attribute data-disabled when disabled not provided', () => {
        render(<Switch label={label} />);
        expect(screen.getByText(label)).not.toHaveAttribute('data-disabled');
      });

      it('should have attribute data-disabled when disabled provided', () => {
        render(<Switch disabled label={label} />);
        expect(screen.getByText(label)).toHaveAttribute('data-disabled');
      });
    });

    describe('Required state', () => {
      it('should contain required indicator when required provided', () => {
        render(<Switch required label={label} requiredIndicator={requiredIndicator} />);

        const labelElement = screen.getByText(label);
        const requiredIndicatorElement = screen.getByText(requiredIndicator, { trim: false });

        expect(labelElement).toContainElement(requiredIndicatorElement);
      });
    });
  });

  describe('Required indicator element', () => {
    it('should not render when required not provided', () => {
      render(<Switch label={label} />);
      expect(screen.queryByText(requiredIndicator, { trim: false })).not.toBeInTheDocument();
    });

    it('should render when prop required provided', () => {
      render(<Switch required label={label} requiredIndicator={requiredIndicator} />);
      expect(screen.getByText(requiredIndicator, { trim: false })).toBeInTheDocument();
    });

    it('should have class name handed over when requiredIndicatorClassName provided', () => {
      const requiredIndicatorClassName = 'test';

      render(
        <Switch
          required
          label={label}
          requiredIndicator={requiredIndicator}
          requiredIndicatorClassName={requiredIndicatorClassName}
        />
      );
      expect(screen.getByText(requiredIndicator, { trim: false })).toHaveClass(
        requiredIndicatorClassName
      );
    });
  });

  describe('Description element', () => {
    it('should not render when description not provided', () => {
      render(<Switch />);
      expect(screen.queryByText(description)).not.toBeInTheDocument();
    });

    it('should render when description provided', () => {
      render(<Switch description={description} />);
      expect(screen.getByText(description)).toBeInTheDocument();
    });

    it('should have class name handed over when descriptionClassName provided', () => {
      const descriptionClassName = 'test';

      render(<Switch description={description} descriptionClassName={descriptionClassName} />);
      expect(screen.getByText(description)).toHaveClass(descriptionClassName);
    });

    describe('Disabled state', () => {
      it('should have not attribute data-disabled when disabled not provided', () => {
        render(<Switch description={description} />);
        expect(screen.getByText(description)).not.toHaveAttribute('data-disabled');
      });

      it('should have attribute data-disabled when disabled provided', () => {
        render(<Switch disabled description={description} />);
        expect(screen.getByText(description)).toHaveAttribute('data-disabled');
      });
    });
  });

  describe('Error message element', () => {
    it('should not render when invalid not provided', () => {
      render(<Switch errorMessage={errorMessage} />);
      expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
    });

    it('should render when invalid provided', () => {
      render(<Switch invalid errorMessage={errorMessage} />);
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    it('should have class name handed over when errorMessageClassName provided', () => {
      const errorMessageClassName = 'test';

      render(
        <Switch invalid errorMessage={errorMessage} errorMessageClassName={errorMessageClassName} />
      );
      expect(screen.getByText(errorMessage)).toHaveClass(errorMessageClassName);
    });

    describe('Disabled state', () => {
      it('should have not attribute data-disabled when disabled not provided', () => {
        render(<Switch invalid errorMessage={errorMessage} />);
        expect(screen.getByText(errorMessage)).not.toHaveAttribute('data-disabled');
      });

      it('should have attribute data-disabled when disabled provided', () => {
        render(<Switch disabled invalid errorMessage={errorMessage} />);
        expect(screen.getByText(errorMessage)).toHaveAttribute('data-disabled');
      });
    });
  });

  describe('Input element', () => {
    it('should render correctly', () => {
      render(<Switch />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('should have class name handed over when inputClassName provided', () => {
      const inputClassName = 'test';

      render(<Switch inputClassName={inputClassName} />);
      expect(screen.getByRole('switch')).toHaveClass(inputClassName);
    });

    describe('Accessibility', () => {
      it('should have accessible name when aria-label provided', () => {
        render(<Switch aria-label="Switch without label" />);
        expect(screen.getByRole('switch')).toHaveAccessibleName();
      });

      it('should have accessible name when label provided', () => {
        render(<Switch label="Switch label" />);
        expect(screen.getByRole('switch')).toHaveAccessibleName();
      });

      it('should have accessible name when label and id provided', () => {
        render(<Switch id="switch-id" label="Switch label" />);
        expect(screen.getByRole('switch')).toHaveAccessibleName();
      });
    });

    describe('Uncontrolled', () => {
      it('should check and uncheck', async () => {
        render(<Switch />);

        const user = userEvent.setup();
        const inputElement = screen.getByRole('switch');

        await user.click(inputElement);
        expect(inputElement).toBeChecked();

        await user.click(inputElement);
        expect(inputElement).not.toBeChecked();
      });

      it('should not check if disabled', async () => {
        render(<Switch disabled />);

        const user = userEvent.setup();
        const inputElement = screen.getByRole('switch');

        expect(inputElement).toBeDisabled();

        await user.click(inputElement);
        expect(inputElement).not.toBeChecked();
      });
    });

    describe('Controlled', () => {
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      function ControlledSwitch({ onChange, disabled }: { onChange?: any; disabled?: boolean }) {
        const [checked, setChecked] = useState(false);

        return (
          <Switch
            disabled={disabled}
            checked={checked}
            onChange={(e) => {
              onChange?.();
              setChecked(e.currentTarget.checked);
            }}
          />
        );
      }

      it('should check and uncheck', async () => {
        const onChange = vi.fn();

        render(<ControlledSwitch onChange={onChange} />);

        const user = userEvent.setup();
        const inputElement = screen.getByRole('switch');

        expect(inputElement).not.toBeChecked();

        await user.click(inputElement);
        expect(inputElement).toBeChecked();
        expect(onChange).toHaveBeenCalled();

        await user.click(inputElement);
        expect(inputElement).not.toBeChecked();
        expect(onChange).toHaveBeenCalled();
      });

      it('should not check if disabled', async () => {
        render(<ControlledSwitch disabled />);

        const user = userEvent.setup();
        const inputElement = screen.getByRole('switch');

        expect(inputElement).toBeDisabled();

        await user.click(inputElement);
        expect(inputElement).not.toBeChecked();
      });
    });

    describe('Disabled state', () => {
      it('should not be disabled when disabled not provided', () => {
        render(<Switch />);
        expect(screen.getByRole('switch')).toBeEnabled();
      });

      it('should be disabled when disabled provided', () => {
        render(<Switch disabled />);
        expect(screen.getByRole('switch')).toBeDisabled();
      });
    });

    describe('Required state', () => {
      it('should not be required when required not provided', () => {
        render(<Switch />);
        expect(screen.getByRole('switch')).not.toBeRequired();
      });

      it('should be required when required provided', () => {
        render(<Switch required />);
        expect(screen.getByRole('switch')).toBeRequired();
      });
    });

    describe('Invalid state', () => {
      it('should not be invalid when invalid not provided', () => {
        render(<Switch />);
        expect(screen.getByRole('switch')).not.toBeInvalid();
      });

      it('should be invalid when invalid provided', () => {
        render(<Switch invalid />);
        expect(screen.getByRole('switch')).toBeInvalid();
      });

      it('should have not attribute data-invalid when invalid not provided', () => {
        render(<Switch />);
        expect(screen.getByRole('switch')).not.toHaveAttribute('data-invalid');
      });

      it('should have attribute data-invalid when invalid provided', () => {
        render(<Switch invalid />);
        expect(screen.getByRole('switch')).toHaveAttribute('data-invalid');
      });
    });
  });
});
