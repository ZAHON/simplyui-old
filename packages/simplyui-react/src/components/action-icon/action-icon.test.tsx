import { render, screen } from '@testing-library/react';
import { ActionIcon } from './action-icon';

const actionIconContent = 'ActionIcon';

describe('ActionIcon', () => {
  it('should be not disabled when property disabled not provided', () => {
    render(<ActionIcon disabled={false}>{actionIconContent}</ActionIcon>);
    expect(screen.getByRole('button')).not.toBeDisabled;
  });

  it('should be disabled when property disabled provided', () => {
    render(<ActionIcon disabled={true}>{actionIconContent}</ActionIcon>);
    expect(screen.getByRole('button')).toBeDisabled;
  });

  it('should be not disabled when property loading not provided', () => {
    render(<ActionIcon loading={false}>{actionIconContent}</ActionIcon>);
    expect(screen.getByRole('button')).not.toBeDisabled;
  });

  it('should be disabled when property loading provided', () => {
    render(<ActionIcon loading={true}>{actionIconContent}</ActionIcon>);
    expect(screen.getByRole('button')).toBeDisabled;
  });

  it('should not include loader when property loading not provided', () => {
    render(<ActionIcon loading={false}>{actionIconContent}</ActionIcon>);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('should include loader when property loading provided', () => {
    render(<ActionIcon loading={true}>{actionIconContent}</ActionIcon>);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should have not icon when property loading provided', () => {
    const { rerender } = render(<ActionIcon loading={false}>{actionIconContent}</ActionIcon>);
    expect(screen.getByText(actionIconContent)).toBeInTheDocument();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();

    rerender(<ActionIcon loading={true}>{actionIconContent}</ActionIcon>);
    expect(screen.queryByText(actionIconContent)).not.toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should include custom loader when properties loading and loader provided', () => {
    function CustomLoader() {
      return <span>Loader</span>;
    }

    const { rerender } = render(<ActionIcon loading={true}>{actionIconContent}</ActionIcon>);
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.queryByText('Loader')).not.toBeInTheDocument();

    rerender(
      <ActionIcon loading={true} loader={<CustomLoader />}>
        {actionIconContent}
      </ActionIcon>
    );
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(screen.getByText('Loader')).toBeInTheDocument();
  });

  it('should have class name handed over when property className provided', () => {
    const className = 'test';

    render(<ActionIcon className={className}>{actionIconContent}</ActionIcon>);
    expect(screen.getByRole('button')).toHaveClass(className);
  });

  it('should have style handed over when property style provided', () => {
    const style = { backgroundColor: 'red' };

    render(<ActionIcon style={style}>{actionIconContent}</ActionIcon>);
    expect(screen.getByRole('button')).toHaveStyle(style);
  });
});
